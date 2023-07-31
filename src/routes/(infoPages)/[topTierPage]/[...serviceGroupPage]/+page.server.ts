import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { ServiceGroupCollectionQuery } from "./$queries.generated";
import serviceGroupPageTestContent from "./__tests__/serviceGroupPageTestContent";
import type { ExtractQueryType } from "$lib/util/types";

// TODO: Raise limit filter as needed. Default is 100; might need to paginate above that.
const query = gql`
  fragment ImageProps on Asset {
    sys {
      id
    }
    contentType
    title
    description
    url
    width
    height
  }

  query ServiceGroupCollection($metadataID: String!) {
    serviceGroupCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
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
          links {
            assets {
              block {
                ...ImageProps
              }
              hyperlink {
                ...ImageProps
              }
            }
          }
        }
        serviceEntriesCollection(limit: 5) {
          items {
            ... on ServiceEntry {
              sys {
                id
              }
              __typename
              entryTitle
              description {
                json
                links {
                  assets {
                    block {
                      # eslint-disable-next-line @graphql-eslint/selection-set-depth
                      ...ImageProps
                    }
                    hyperlink {
                      # eslint-disable-next-line @graphql-eslint/selection-set-depth
                      ...ImageProps
                    }
                  }
                }
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
          links {
            assets {
              block {
                ...ImageProps
              }
              hyperlink {
                ...ImageProps
              }
            }
          }
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

type ServiceGroup = ExtractQueryType<
  ServiceGroupCollectionQuery,
  ["serviceGroupCollection", "items", number]
>;

type ServiceGroupMetadata = ExtractQueryType<ServiceGroup, ["pageMetadata"]>;

type ChildServiceEntryOrGroup = ExtractQueryType<
  ServiceGroup,
  ["serviceEntriesCollection", "items", number]
>;

type ChildServiceEntry = Extract<ChildServiceEntryOrGroup, { __typename: "ServiceEntry" }>;

type ChildServiceGroup = Extract<ChildServiceEntryOrGroup, { __typename: "ServiceGroup" }>;

export type ServiceGroupPage = {
  serviceGroup: ServiceGroup;
  childServiceEntries: ChildServiceEntry[];
  childServiceGroups: (ChildServiceGroup & { url?: string | null | undefined })[];
  pageMetadata?: ServiceGroupMetadata;
};

export const load = async ({ parent, params }): Promise<ServiceGroupPage> => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return serviceGroupPageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  const { topTierPage, serviceGroupPage } = params;
  // construct URL for matching later
  const url = `/${topTierPage}/${serviceGroupPage}`;
  // service groups can be deeply nested
  const metadataID = pathsToIDs.get(url);
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<ServiceGroupCollectionQuery>(printQuery(query), {
    variables: { metadataID },
  });
  findMatchingServiceGroup: {
    if (!data) break findMatchingServiceGroup;
    const [serviceGroup] = data?.serviceGroupCollection?.items ?? [];
    if (!serviceGroup) break findMatchingServiceGroup;
    const { pageMetadata } = serviceGroup ?? {};
    if (!pageMetadata) break findMatchingServiceGroup;
    const childServiceEntries =
      serviceGroup.serviceEntriesCollection?.items.filter(
        (item): item is ChildServiceEntry => item?.__typename === "ServiceEntry"
      ) ?? [];
    const childServiceGroups =
      serviceGroup.serviceEntriesCollection?.items
        .filter((item): item is ChildServiceGroup => item?.__typename === "ServiceGroup")
        .map((group) => {
          const { id } = group?.pageMetadata?.sys ?? {};
          if (!id) return group;
          const { url } = pageMetadataMap.get(id) ?? {};
          return { ...group, url };
        }) ?? [];
    return {
      serviceGroup,
      pageMetadata,
      childServiceEntries,
      childServiceGroups,
    };
  }
  throw error(404);
};
