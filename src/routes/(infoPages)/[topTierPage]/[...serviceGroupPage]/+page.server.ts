import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import isNotNull from "$lib/util/isNotNull";

import {
  getBlurhash,
  getBlurhashMapFromAssetList,
  getBlurhashMapFromRichText,
} from "$lib/services/blurhashes";
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
import getYoutubeVideoIDFromURL from "$lib/util/getYoutubeVideoIDFromURL";
import {
  getYoutubeVideoDataWithBlurhash,
  type YoutubeVideoData,
} from "$lib/services/server/youtube";
import { getDateSixMonthsAgoInTZ, getStartOfDayForDateInTZ } from "$lib/util/dates";
import { eventIANATimezone } from "$lib/constants/date";

const baseQuery = gql`
  # eslint-disable @graphql-eslint/selection-set-depth
  ${assetPropsFragment}
  ${entryPropsFragment}

  query ServiceGroup($metadataID: String!, $newsOldestDate: DateTime!, $preview: Boolean = false) {
    serviceGroupCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
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
        video {
          ... on VideoWrapper {
            videoTitle
            videoSubhead
            videoUrl
          }
        }
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
        imageGalleryTitle
        imageGalleryCollection {
          items {
            ...AssetProps
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
        recentNewsCollection(where: { publicationDate_gte: $newsOldestDate }) {
          items {
            sys {
              id
            }
            type
            title
            subhead
            publicationDate
            slug
            byline
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

  query ServiceGroupChildEntries($ids: [String]!, $preview: Boolean = false) {
    # Limiting to requesting 10 at once; we always make this request in chunks.
    serviceEntryCollection(limit: 10, where: { sys: { id_in: $ids } }, preview: $preview) {
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
  query ServiceGroupChildGroups($ids: [String]!, $preview: Boolean = false) {
    serviceGroupCollection(limit: 50, where: { sys: { id_in: $ids } }, preview: $preview) {
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
        heroImage {
          ... on HeroImage {
            imageSource {
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
        }
      }
    }
  }
`;

type ServiceGroup = ExtractQueryType<
  ServiceGroupQuery,
  ["serviceGroupCollection", "items", number]
>;

type ServiceGroupMetadata = ExtractQueryType<ServiceGroup, ["pageMetadata"]>;

type ImageGalleryItem = ExtractQueryType<ServiceGroup, ["imageGalleryCollection", "items", number]>;
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
type ChildServiceGroupHeroImage = ExtractQueryType<ChildServiceGroup, ["heroImage"]>;
type ChildServiceGroupHeroImageSource = ExtractQueryType<
  ChildServiceGroupHeroImage,
  ["imageSource"]
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
    video?: ServiceGroup["video"] & {
      youtubeVideoData?: YoutubeVideoData;
      blurhash?: string;
    };
  };
  childServiceEntries: (ChildServiceEntry & {
    description?: ChildServiceEntry["description"] & {
      blurhashes?: Record<string, string> | null | undefined;
    };
  })[];
  childServiceGroups: (ChildServiceGroup & { url?: string | null | undefined } & {
    heroImage?: ChildServiceGroupHeroImage & {
      imageSource?: ChildServiceGroupHeroImageSource & {
        blurhash?: string | null | undefined;
      };
    };
  })[];
  imageGallery: {
    images: NonNullable<ImageGalleryItem[]>;
    blurhashes: Record<string, string>;
  };
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
  locals: { getKVClient, contentfulClient },
  fetch,
}): Promise<ServiceGroupPage> => {
  if (!contentfulClient) return serviceGroupPageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  // construct URL for matching later
  const path = `/${topTierPage}/${serviceGroupPage}`;
  fetchData: {
    const metadataID = pathsToIDs.get(path);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;

    const newsOldestDate = getStartOfDayForDateInTZ(
      getDateSixMonthsAgoInTZ(eventIANATimezone),
      eventIANATimezone,
    );

    const baseData = await contentfulClient.fetch<ServiceGroupQuery>(printQuery(baseQuery), {
      variables: { metadataID, newsOldestDate },
    });
    if (!baseData) break fetchData;
    const [serviceGroup] = baseData?.serviceGroupCollection?.items ?? [];
    if (!serviceGroup) break fetchData;

    const heroImageURL = serviceGroup?.heroImage?.imageSource?.url;
    const heroImageBlurhashPromise = heroImageURL && getBlurhash(heroImageURL, { fetch });

    const youtubeVideoID =
      serviceGroup.video?.videoUrl && getYoutubeVideoIDFromURL(serviceGroup.video.videoUrl);
    const youtubeVideoDataPromise = youtubeVideoID
      ? getKVClient().then((kvClient) =>
          getYoutubeVideoDataWithBlurhash(youtubeVideoID, { fetch, kvClient }),
        )
      : undefined;

    const descriptionBlurhashesPromise =
      serviceGroup.description &&
      getBlurhashMapFromRichText(serviceGroup.description, {
        fetch,
      });

    const imageGallery = serviceGroup.imageGalleryCollection?.items ?? [];
    const imageGalleryBlurhashesPromise =
      imageGallery.length > 0 && getBlurhashMapFromAssetList(imageGallery, { fetch });

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
                contentfulClient.fetch<ServiceGroupChildEntriesQuery>(
                  printQuery(childServiceEntriesQuery),
                  {
                    variables: { ids: chunk },
                  },
                ),
              ]
            : [],
        ),
      ),
      childServiceGroupIDs.length > 0
        ? contentfulClient.fetch<ServiceGroupChildGroupsQuery>(
            printQuery(childServiceGroupsQuery),
            {
              variables: { ids: childServiceGroupIDs },
            },
          )
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

    const childServiceGroupsItems = inOrder(
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

    const childServiceGroupsPromise = Promise.all(
      childServiceGroupsItems?.map(async (entry) => {
        if (!entry) return [];
        const heroImageURL = entry?.heroImage?.imageSource?.url;
        const heroImageBlurhash = heroImageURL && (await getBlurhash(heroImageURL, { fetch }));
        return [
          {
            ...entry,
            heroImage: entry.heroImage
              ? {
                  ...entry.heroImage,
                  imageSource: entry.heroImage.imageSource
                    ? {
                        ...entry.heroImage.imageSource,
                        blurhash: heroImageBlurhash,
                      }
                    : undefined,
                }
              : undefined,
          },
        ];
      }) ?? [],
    ).then((arr) => arr.flat());

    // additionalResources is not yet used on the page, so we don't fetch its blurhashes

    const [
      heroImageBlurhash,
      youtubeVideoData,
      descriptionBlurhashes,
      childServiceEntries,
      childServiceGroups,
      imageGalleryBlurhashes,
    ] = await Promise.all([
      heroImageBlurhashPromise,
      youtubeVideoDataPromise,
      descriptionBlurhashesPromise,
      childServiceEntriesPromise,
      childServiceGroupsPromise,
      imageGalleryBlurhashesPromise,
    ]);

    return {
      serviceGroup: {
        ...serviceGroup,
        video: {
          ...serviceGroup.video,
          youtubeVideoData,
        },
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
      imageGallery: {
        images: imageGallery.filter(isNotNull),
        blurhashes: imageGalleryBlurhashes ? imageGalleryBlurhashes : {},
      },
      pageMetadata,
      pageMetadataMap,
      childServiceEntries,
      childServiceGroups,
    };
  }
  throw error(404);
};
