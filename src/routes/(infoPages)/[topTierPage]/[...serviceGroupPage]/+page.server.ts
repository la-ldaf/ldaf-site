import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { getBlurhash, getBlurhashMapFromRichText } from "$lib/services/blurhashes";

import type {
  ServiceGroupQuery,
  ServiceGroupChildEntriesQuery,
  ServiceGroupChildGroupsQuery,
} from "./$queries.generated";
import serviceGroupPageTestContent from "./__tests__/serviceGroupPageTestContent";
import type { ExtractQueryType } from "$lib/util/types";
import chunks from "$lib/util/chunks";
import assetPropsFragment from "$lib/fragments/assetProps";
import entryPropsFragment from "$lib/fragments/entryProps";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

const baseQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}

  query ServiceGroup($metadataID: String!) {
    serviceGroupCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
      items {
        sys {
          id
        }
        heroImage {
          ... on HeroImage {
            imageSource {
              ...AssetProps
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
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
        # We currently allow up to 50 references here (50 services, 50 core
        #   content, or a mix of the two). This is mainly to account for the
        #   Boards and Commissions page, which has somewhere around 28
        #   individual Board / Commission core content pages that it links to
        #   via cards, and we want to set a high limit so that LDAF isn't
        #   restrained by this in the future.
        serviceEntriesCollection(limit: 50) {
          items {
            __typename
            ... on ServiceEntry {
              sys {
                id
              }
            }
            ... on ServiceGroup {
              sys {
                id
              }
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
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
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
  # eslint-enable @graphql-eslint/selection-set-depth
`;

const childServiceEntriesQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}

  query ServiceGroupChildEntries($ids: [String]!) {
    # Limiting to requesting 10 at once; we always make this request in chunks.
    serviceEntryCollection(limit: 10, where: { sys: { id_in: $ids } }) {
      items {
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
                ...AssetProps
              }
              hyperlink {
                ...AssetProps
              }
            }
            entries {
              block {
                ...EntryProps
              }
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
        serviceCtaCollection {
          items {
            callToActionDestination {
              json
              links {
                assets {
                  block {
                    ...AssetProps
                  }
                  hyperlink {
                    ...AssetProps
                  }
                }
                entries {
                  block {
                    ...EntryProps
                  }
                  hyperlink {
                    ...EntryProps
                  }
                }
              }
            }
          }
        }
        contactInformationCollection(limit: 5) {
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
      }
    }
  }
  # eslint-enable @graphql-eslint/selection-set-depth
`;

const childServiceGroupsQuery = gql`
  query ServiceGroupChildGroups($ids: [String]!) {
    serviceGroupCollection(limit: 50, where: { sys: { id_in: $ids } }) {
      items {
        sys {
          id
        }
        pageMetadata {
          sys {
            id
          }
        }
        __typename
        title
        subheading
      }
    }
  }
`;

type ServiceGroup = ExtractQueryType<
  ServiceGroupQuery,
  ["serviceGroupCollection", "items", number]
>;

type ServiceGroupMetadata = ExtractQueryType<ServiceGroup, ["pageMetadata"]>;

type ChildServiceEntryOrGroupStub = ExtractQueryType<
  ServiceGroup,
  ["serviceEntriesCollection", "items", number]
>;

type ChildServiceEntryStub = Extract<ChildServiceEntryOrGroupStub, { __typename: "ServiceEntry" }>;
type ChildServiceGroupStub = Extract<ChildServiceEntryOrGroupStub, { __typename: "ServiceGroup" }>;

type ChildServiceEntry = ExtractQueryType<
  ServiceGroupChildEntriesQuery,
  ["serviceEntryCollection", "items", number]
>;

type ChildServiceGroup = ExtractQueryType<
  ServiceGroupChildGroupsQuery,
  ["serviceGroupCollection", "items", number]
>;

export type ServiceGroupPage = {
  serviceGroup: ServiceGroup & {
    heroImage?: ServiceGroup["heroImage"] & {
      imageSource?: NonNullable<ServiceGroup["heroImage"]>["imageSource"] & {
        blurhash?: string | null | undefined;
      };
    };
    description?: ServiceGroup["description"] & {
      blurhashes?: Record<string, string> | null | undefined;
    };
  };
  childServiceEntries: (ChildServiceEntry & {
    description?: ChildServiceEntry["description"] & {
      blurhashes?: Record<string, string> | null | undefined;
    };
  })[];
  childServiceGroups: (ChildServiceGroup & { url?: string | null | undefined })[];
  pageMetadata?: ServiceGroupMetadata;
  pageMetadataMap?: PageMetadataMap;
};

const inOrder = <T>(items: T[], fn: (item: T) => string, order: string[]) => {
  if (order.length !== items.length) {
    throw new Error("ID order array does not match the provided items");
  }
  const ids = items.map(fn);
  const record = Object.fromEntries(ids.map((id, i) => [id, items[i]]));
  if (!order.every((id) => record[id])) {
    throw new Error("ID order array does not match the provided items");
  }
  return order.map((id) => record[id]);
};

export const load = async ({
  parent,
  params: { topTierPage, serviceGroupPage },
  fetch,
}): Promise<ServiceGroupPage> => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return serviceGroupPageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  // construct URL for matching later
  const path = `/${topTierPage}/${serviceGroupPage}`;
  fetchData: {
    const metadataID = pathsToIDs.get(path);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });

    const baseData = await client.fetch<ServiceGroupQuery>(printQuery(baseQuery), {
      variables: { metadataID },
    });
    if (!baseData) break fetchData;
    const [serviceGroup] = baseData?.serviceGroupCollection?.items ?? [];
    if (!serviceGroup) break fetchData;

    const heroImageURL = serviceGroup?.heroImage?.imageSource?.url;
    const heroImageBlurhashPromise = heroImageURL && getBlurhash(heroImageURL, { fetch });
    const descriptionBlurhashesPromise =
      serviceGroup.description &&
      getBlurhashMapFromRichText(serviceGroup.description, {
        fetch,
      });

    const childServiceEntryIDs =
      serviceGroup.serviceEntriesCollection?.items
        ?.filter((item): item is ChildServiceEntryStub => item?.__typename === "ServiceEntry")
        ?.map(({ sys: { id } }) => id) ?? [];

    const childServiceEntryIDChunks = chunks(childServiceEntryIDs, 10);

    const childServiceGroupIDs =
      serviceGroup.serviceEntriesCollection?.items
        ?.filter((item): item is ChildServiceGroupStub => item?.__typename === "ServiceGroup")
        ?.map(({ sys: { id } }) => id) ?? [];

    const [childEntriesDataChunks, childGroupsData] = await Promise.all([
      Promise.all(
        childServiceEntryIDChunks.flatMap((chunk) =>
          chunk.length > 0
            ? [
                client.fetch<ServiceGroupChildEntriesQuery>(printQuery(childServiceEntriesQuery), {
                  variables: { ids: chunk },
                }),
              ]
            : [],
        ),
      ),
      childServiceGroupIDs.length > 0
        ? client.fetch<ServiceGroupChildGroupsQuery>(printQuery(childServiceGroupsQuery), {
            variables: { ids: childServiceGroupIDs },
          })
        : { serviceGroupCollection: { items: [] } },
    ]);
    const childServiceEntriesItems = inOrder(
      childEntriesDataChunks.flatMap(
        (dataChunk) =>
          dataChunk?.serviceEntryCollection?.items.filter(
            (item): item is NonNullable<typeof item> => !!item,
          ) ?? [],
      ),
      (item) => item?.sys?.id,
      childServiceEntryIDs,
    );

    const childServiceEntriesPromise = Promise.all(
      childServiceEntriesItems?.map(async (entry) =>
        entry
          ? [
              {
                ...entry,
                description: entry.description
                  ? {
                      ...entry.description,
                      blurhashes: await getBlurhashMapFromRichText(entry?.description, { fetch }),
                    }
                  : undefined,
              },
            ]
          : [],
      ) ?? [],
    ).then((arr) => arr.flat());

    const childServiceGroups = inOrder(
      childGroupsData?.serviceGroupCollection?.items?.flatMap((group) => {
        if (!group) return [];
        const { id } = group.pageMetadata?.sys ?? {};
        if (!id) return [group];
        const { url } = pageMetadataMap.get(id) ?? {};
        return [{ ...group, url }];
      }) ?? [],
      (item) => item?.sys?.id,
      childServiceGroupIDs,
    );

    // additionalResources is not yet used on the page, so we don't fetch its blurhashes

    const [heroImageBlurhash, descriptionBlurhashes, childServiceEntries] = await Promise.all([
      heroImageBlurhashPromise,
      descriptionBlurhashesPromise,
      childServiceEntriesPromise,
    ]);
    return {
      serviceGroup: {
        ...serviceGroup,
        description: serviceGroup.description
          ? {
              ...serviceGroup.description,
              blurhashes: descriptionBlurhashes,
            }
          : undefined,
        heroImage: serviceGroup.heroImage
          ? {
              ...serviceGroup.heroImage,
              imageSource: serviceGroup.heroImage.imageSource
                ? { ...serviceGroup.heroImage.imageSource, blurhash: heroImageBlurhash }
                : undefined,
            }
          : undefined,
      },
      pageMetadata,
      pageMetadataMap,
      childServiceEntries,
      childServiceGroups,
    };
  }
  throw error(404);
};
