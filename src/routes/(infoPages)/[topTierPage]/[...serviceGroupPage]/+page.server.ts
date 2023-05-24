import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import { map, filter } from "$lib/util/generators";
import type { ServiceGroup, ServiceEntry } from "$lib/services/server/contentful/schema";
import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import ServiceGroupPageTestContent from "./__tests__/ServiceGroupPageTestContent";

export type ServiceGroupPage = ServiceGroup & {
  serviceEntries: ServiceEntry[];
  serviceGroups: (ServiceGroup & { url: string })[];
};

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  query ServiceGroupCollection($slug: String!, $preview: Boolean = false) {
    serviceGroupCollection(
      limit: 100
      preview: $preview
      where: { pageMetadata: { slug: $slug } }
    ) {
      items {
        sys {
          id
        }
        heroImage {
          ... on HeroImage {
            imageSource {
              ... on Asset {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
            }
            imageTitle
            altField
            fotogCredit
          }
        }
        title
        subheading
        description {
          json
        }
        serviceEntriesCollection(limit: 10) {
          items {
            ... on ServiceEntry {
              sys {
                id
              }
              __typename
              entryTitle
              description {
                json
              }
            }
            ... on ServiceGroup {
              __typename
              pageMetadata {
                sys {
                  id
                }
              }
              title
              subheading
            }
          }
        }
        contactInfoCollection(limit: 5) {
          items {
            ... on Contact {
              sys {
                id
              }
              entityName
              phone
              email
            }
          }
        }
        additionalResources {
          json
        }
        serviceListName
        pageMetadata {
          ... on PageMetadata {
            sys {
              id
            }
            slug
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`;

export const load = async ({
  parent,
  locals: { contentfulClient, logger },
  params: { topTierPage, serviceGroupPage },
}) => {
  // TODO: offline fixtures
  if (!contentfulClient) throw error(500);

  // construct URL for matching later
  const url = `/${topTierPage}/${serviceGroupPage}`;
  // service groups can be deeply nested
  const path = url.split("/");
  const slug = path[path.length - 1];
  const data = await contentfulClient.fetch<ServiceGroupCollectionQuery>(query);

  if (!data) {
    await logger.logError(new Error("query returned no response"));
    throw error(404);
  }

  const { pageMetadataMap } = await parent();
  const serviceGroupsMatchingSlug =
    data?.serviceGroupCollection?.items?.filter(
      (serviceGroup) => serviceGroup?.pageMetadata?.slug === slug
    ) ?? [];
  if (serviceGroupsMatchingSlug.length === 0) {
    await logger.logError(
      new Error(
        `A Service Group entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Service Group entry is not.`
      )
    );
    throw error(404);
  }

  // account for possibility that two service groups have the same ending slug
  const matchedServiceGroupsMetadataGenerator = map(serviceGroupsMatchingSlug, (group) => {
    const serviceGroupMetadataID = group?.pageMetadata?.sys?.id;
    return {
      group,
      metadata: serviceGroupMetadataID ? pageMetadataMap.get(serviceGroupMetadataID) : undefined,
    };
  });

  // Regardless of how many matches we have, we want to ensure the URL matches. Otherwise we could
  // render the page for /land/fire/safety at /foo/bar/safety.
  const serviceGroupsMatchingURLGenerator = filter(
    matchedServiceGroupsMetadataGenerator,
    ({ metadata }) => metadata?.url === url
  );

  const firstMatchingGroupResult = serviceGroupsMatchingURLGenerator.next();
  if (!("value" in firstMatchingGroupResult) || !firstMatchingGroupResult.value) {
    await logger.logError(
      new Error(`A Service Group entry with the slug "${slug}" and url "${url}" was not found`)
    );
    throw error(404);
  }

  const {
    value: { group: serviceGroup, metadata: pageMetadata },
  } = firstMatchingGroupResult;

  const secondMatchingGroupResult = serviceGroupsMatchingURLGenerator.next();
  if (!secondMatchingGroupResult.done) {
    // TODO: warning instead of error
    await logger.logError(
      new Error(
        `A Service Group entry with the slug "${slug}" and url "${url}" matched multiple entries`
      )
    );
  }

  type ServiceEntriesCollectionUnion = NonNullable<
    NonNullable<NonNullable<typeof serviceGroup>["serviceEntriesCollection"]>["items"]
  >[number];

  type ServiceEntry = Extract<ServiceEntriesCollectionUnion, { __typename: "ServiceEntry" }>;
  const serviceEntries = serviceGroup?.serviceEntriesCollection?.items?.filter(
    (item): item is ServiceEntry => item?.__typename === "ServiceEntry"
  );

  type ServiceGroup = Extract<ServiceEntriesCollectionUnion, { __typename: "ServiceGroup" }>;
  const serviceGroups = serviceGroup?.serviceEntriesCollection?.items
    .filter((item): item is ServiceGroup => item?.__typename === "ServiceGroup")
    .map((group) => {
      const metadata = group?.pageMetadata?.sys?.id
        ? pageMetadataMap.get(group.pageMetadata.sys.id)
        : undefined;
      return { ...group, url: metadata?.url };
    });

  return {
    ...serviceGroup,
    pageMetadata,
    serviceEntries,
    serviceGroups,
  };
};
