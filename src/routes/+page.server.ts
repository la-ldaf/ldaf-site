import { print as printQuery } from "graphql";
import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import { getBlurhash } from "$lib/services/blurhashes";
import { getYoutubeVideoDataWithBlurhash } from "$lib/services/server/youtube";
import getYoutubeVideoIDFromURL from "$lib/util/getYoutubeVideoIDFromURL";
import { eventIANATimezone } from "$lib/constants/date";
import { getCurrentDateInTZ, getStartOfDayForDateInTZ } from "$lib/util/dates";

import assetProps from "$lib/fragments/assetProps";

import type { HomePageQuery } from "./$queries.generated";
import type { PageMetadataMapItem } from "$lib/loadPageMetadataMap";
import type { ExtractQueryType } from "$lib/util/types";
import homePageTestContent from "./__tests__/homePageTestContent";
import type { YoutubeVideoData } from "$lib/services/server/youtube/getYoutubeVideoData";
import type { ResourceLinks } from "$lib/components/ResourceLinks";

const query = gql`
  ${assetProps}

  fragment ImageWrapperProps on ImageWrapper {
    altText
    linkedImage {
      ... on Asset {
        ...AssetProps
      }
    }
  }

  query HomePage($metadataID: String!, $eventStartDate: DateTime!) {
    homeCollection(where: { pageMetadata: { sys: { id: $metadataID } } }, limit: 1) {
      items {
        pageMetadata {
          sys {
            id
          }
        }
        heroVideo {
          ... on VideoWrapper {
            videoUrl
            videoTitle
            videoSubhead
          }
        }
        popularResourcesListCollection(limit: 9) {
          items {
            pageMetadata {
              sys {
                id
              }
            }
            title
            subheading
          }
        }
        featuredServiceCardsCollection {
          items {
            pageMetadata {
              sys {
                id
              }
            }
            title
            subheading
            heroImage {
              imageSource {
                ...AssetProps
              }
            }
          }
        }
        commissionerGreeting {
          json
        }
        commissionerByline
        commissionerHeadshot {
          ...ImageWrapperProps
        }
        commissionerBackground {
          ...ImageWrapperProps
        }
      }
    }
    newsCollection(order: [publicationDate_DESC], limit: 4) {
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
    eventEntryCollection(
      where: { eventDateAndTime_gte: $eventStartDate }
      order: [eventDateAndTime_ASC]
      limit: 4
    ) {
      items {
        sys {
          id
        }
        slug
        shortTitle
        eventDateAndTime
      }
    }
  }
`;

type Home = ExtractQueryType<HomePageQuery, ["homeCollection", "items", number]>;
type FeaturedService = ExtractQueryType<Home, ["featuredServiceCardsCollection", "items", number]>;
type FeaturedServiceImage = FeaturedService["heroImage"];
type FeaturedServiceImageSource = NonNullable<FeaturedServiceImage>["imageSource"];
type CommissionerHeadshot = ExtractQueryType<Home, ["commissionerHeadshot"]>;
type CommissionerHeadshotImageSource = CommissionerHeadshot["linkedImage"];
type CommissionerBackground = ExtractQueryType<Home, ["commissionerBackground"]>;
type CommissionerBackgroundImageSource = CommissionerBackground["linkedImage"];
type Blurhash = string | null | undefined;
type News = ExtractQueryType<HomePageQuery, ["newsCollection", "items"]>;
type Events = ExtractQueryType<HomePageQuery, ["eventEntryCollection", "items"]>;

export type HomePage = {
  homePage: Home & {
    heroVideo: Home["heroVideo"] & {
      youtubeVideoData?: (YoutubeVideoData & { blurhash?: Blurhash }) | undefined;
    };
    popularResources: ResourceLinks;
    featuredServices: (FeaturedService & {
      url?: string | null | undefined;
    } & {
      heroImage?: FeaturedServiceImage & {
        imageSource?: FeaturedServiceImageSource & {
          blurhash?: Blurhash;
        };
      };
    })[];
    commissionerHeadshot?: CommissionerHeadshot & {
      linkedImage?: CommissionerHeadshotImageSource & {
        blurhash?: Blurhash;
      };
    };
    commissionerBackground?: CommissionerBackground & {
      linkedImage?: CommissionerBackgroundImageSource & {
        blurhash?: Blurhash;
      };
    };
    news: News;
    events: Events;
  };
  pageMetadata: PageMetadataMapItem;
};

// TODO: Maybe make this more reusable since we'll be doing something similar for all Image Wrapper entries.
const addBlurhashToImageWrapper = (
  home: Home,
  fieldName: "commissionerHeadshot" | "commissionerBackground",
  blurhash: Blurhash,
) => {
  const field = home[fieldName];
  return field
    ? {
        ...field,
        linkedImage: field.linkedImage?.url
          ? {
              ...field.linkedImage,
              blurhash,
            }
          : undefined,
      }
    : undefined;
};

export const load = async ({
  parent,
  fetch,
  locals: { getKVClient, contentfulClient },
}): Promise<HomePage> => {
  if (!contentfulClient) return homePageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    // Based on how we construct URLs, we should only ever have one entry with the root path (and regardless, the key is unique).
    const metadataID = pathsToIDs.get("/");
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const eventStartDate = getStartOfDayForDateInTZ(
      getCurrentDateInTZ(eventIANATimezone),
      eventIANATimezone,
    );
    const data = await contentfulClient.fetch<HomePageQuery>(printQuery(query), {
      variables: { metadataID, eventStartDate },
    });
    if (!data) break fetchData;
    const [home] = data?.homeCollection?.items ?? [];
    const news = data?.newsCollection?.items ?? [];
    const events = data?.eventEntryCollection?.items ?? [];
    if (!home) break fetchData;

    const featuredServicesPromises =
      home.featuredServiceCardsCollection?.items.map(async (featuredItem) => {
        const featuredItemMetadata = pageMetadataMap.get(featuredItem?.pageMetadata?.sys.id || "");
        const featuredItemImageSource = featuredItem?.heroImage?.imageSource;
        const featuredItemImageURL = featuredItemImageSource?.url;
        return {
          ...featuredItem,
          heroImage: {
            ...featuredItem?.heroImage,
            imageSource: featuredItemImageURL
              ? {
                  ...featuredItemImageSource,
                  blurhash: await getBlurhash(featuredItemImageURL, { fetch }),
                }
              : undefined,
          },
          url: featuredItemMetadata?.url,
        };
      }) ?? [];

    const youtubeVideoID =
      home.heroVideo?.videoUrl && getYoutubeVideoIDFromURL(home.heroVideo.videoUrl);
    const youtubeVideoDataPromise = youtubeVideoID
      ? getKVClient().then((kvClient) =>
          getYoutubeVideoDataWithBlurhash(youtubeVideoID, { fetch, kvClient }),
        )
      : Promise.resolve(undefined);

    const popularResources =
      home.popularResourcesListCollection?.items?.flatMap((item) => {
        if (!item || !item.pageMetadata?.sys?.id || !item.title) return [];
        const {
          pageMetadata: {
            sys: { id },
          },
          title,
          subheading,
        } = item;
        const { url } = pageMetadataMap.get(id) ?? {};
        if (!url) return [];
        return [{ href: url, title, description: subheading ?? undefined }];
      }) ?? [];

    const commissionerHeadshotURL = home.commissionerHeadshot?.linkedImage?.url;
    const commissionerHeadshotPromise = commissionerHeadshotURL
      ? getBlurhash(commissionerHeadshotURL, { fetch })
      : Promise.resolve(undefined);

    const commissionerBackgroundURL = home.commissionerBackground?.linkedImage?.url;
    const commissionerBackgroundPromise = commissionerBackgroundURL
      ? getBlurhash(commissionerBackgroundURL, { fetch })
      : Promise.resolve(undefined);

    const [
      featuredServices,
      commissionerHeadshotBlurhash,
      commissionerBackgroundBlurhash,
      youtubeVideoData,
    ] = await Promise.all([
      Promise.all(featuredServicesPromises).then((arr) => arr.flat()),
      commissionerHeadshotPromise,
      commissionerBackgroundPromise,
      youtubeVideoDataPromise,
    ]);

    return {
      homePage: {
        ...home,
        featuredServices,
        heroVideo: { ...home.heroVideo, youtubeVideoData },
        popularResources,
        commissionerHeadshot: addBlurhashToImageWrapper(
          home,
          "commissionerHeadshot",
          commissionerHeadshotBlurhash,
        ),
        commissionerBackground: addBlurhashToImageWrapper(
          home,
          "commissionerBackground",
          commissionerBackgroundBlurhash,
        ),
        news,
        events,
      },
      pageMetadata,
    };
  }
  // TODO: We really shouldn't 404 on the home page.
  throw error(404);
};
