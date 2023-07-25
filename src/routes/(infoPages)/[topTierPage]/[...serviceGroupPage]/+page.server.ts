import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type {
  ServiceGroup,
  ServiceEntry,
  // ServiceGroupServiceEntriesItem,
} from "$lib/services/contentful/schema";
import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import ServiceGroupPageTestContent from "./__tests__/ServiceGroupPageTestContent";

export type ServiceGroupPage = ServiceGroup & {
  serviceEntries: ServiceEntry[];
  serviceGroups: (ServiceGroup & { url: string })[];
};

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  query ServiceGroupCollection {
    serviceGroupCollection {
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

export const load = async ({ parent, params }) => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return ServiceGroupPageTestContent;
  const { pageMetadataMap } = await parent();
  const { topTierPage, serviceGroupPage } = params;
  // construct URL for matching later
  const url = `/${topTierPage}/${serviceGroupPage}`;
  // service groups can be deeply nested
  const path = url.split("/");
  const slug = path[path.length - 1];
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<ServiceGroupCollectionQuery>(printQuery(query));
  if (data) {
    const matchedServiceGroupsFromSlug = data?.serviceGroupCollection?.items?.filter(
      (serviceGroup) => {
        return serviceGroup?.pageMetadata?.slug === slug;
      }
    );
    if (matchedServiceGroupsFromSlug && matchedServiceGroupsFromSlug.length > 0) {
      let matchedPageMetadata;
      // account for possibility that two service groups have the same ending slug
      const matchedServiceGroup = matchedServiceGroupsFromSlug.find((group) => {
        const serviceGroupMetadataId = group?.pageMetadata?.sys?.id || "";
        matchedPageMetadata = pageMetadataMap.get(serviceGroupMetadataId);
        if (matchedPageMetadata) {
          return matchedPageMetadata.url === url;
        }
      });

      if (matchedServiceGroup) {
        const serviceEntries = matchedServiceGroup.serviceEntriesCollection?.items.filter(
          (item) => item?.__typename === "ServiceEntry"
        );
        let serviceGroups = matchedServiceGroup.serviceEntriesCollection?.items.filter(
          (item) => item?.__typename === "ServiceGroup"
        ) as ServiceGroup[];

        serviceGroups = serviceGroups.map((serviceGroup) => {
          const serviceGroupMetadata = pageMetadataMap.get(
            serviceGroup?.pageMetadata?.sys.id || ""
          );
          return { ...serviceGroup, url: serviceGroupMetadata?.url };
        });

        return {
          ...matchedServiceGroup,
          pageMetadata: matchedPageMetadata,
          serviceEntries,
          serviceGroups,
        } as ServiceGroupPage;
      }
    } else {
      console.warn(
        `A Service Group entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Service Group entry is not.`
      );
    }
  }
  throw error(404);
};
