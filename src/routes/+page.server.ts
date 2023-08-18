import { print as printQuery } from "graphql";
import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { getBlurhash } from "$lib/services/blurhashes";
import { getYoutubeVideoDataWithBlurhash } from "$lib/services/server/youtube";
import getYoutubeVideoIDFromURL from "$lib/util/getYoutubeVideoIDFromURL";
import type { HomeCollectionQuery } from "./$queries.generated";
import type { PageMetadataMapItem } from "$lib/loadPageMetadataMap";
import type { ExtractQueryType } from "$lib/util/types";
import homePageTestContent from "./__tests__/homePageTestContent";
import type { YoutubeVideoData } from "$lib/services/server/youtube/getYoutubeVideoData";

const query = gql`
  query HomeCollection($metadataID: String!) {
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
        featuredServiceCardsCollection {
          items {
            ... on ServiceGroup {
              pageMetadata {
                ... on PageMetadata {
                  sys {
                    id
                  }
                }
              }
              title
              subheading
              heroImage {
                ... on HeroImage {
                  imageSource {
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
                }
              }
            }
          }
        }
      }
    }
  }
`;

type Home = ExtractQueryType<HomeCollectionQuery, ["homeCollection", "items", number]>;
type FeaturedService = ExtractQueryType<Home, ["featuredServiceCardsCollection", "items", number]>;
type FeaturedServiceImage = FeaturedService["heroImage"];
type FeaturedServiceImageSource = NonNullable<FeaturedServiceImage>["imageSource"];

export type HomePage = {
  homePage: Home & {
    heroVideo: Home["heroVideo"] & {
      youtubeVideoData?: (YoutubeVideoData & { blurhash?: string | undefined }) | undefined;
    };
    featuredServices: (FeaturedService & {
      url?: string | null | undefined;
    } & {
      heroImage?: FeaturedServiceImage & {
        imageSource?: FeaturedServiceImageSource & {
          blurhash?: string | null | undefined;
        };
      };
    })[];
  };
  pageMetadata: PageMetadataMapItem;
};

export const load = async ({ parent, fetch, locals: { getKVClient } }): Promise<HomePage> => {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) return homePageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    // Based on how we construct URLs, we should only ever have one entry with the root path (and regardless, the key is unique).
    const metadataID = pathsToIDs.get("/");
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<HomeCollectionQuery>(printQuery(query), {
      variables: { metadataID },
    });
    if (!data) break fetchData;
    const [home] = data?.homeCollection?.items ?? [];
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
          getYoutubeVideoDataWithBlurhash(youtubeVideoID, { fetch, kvClient })
        )
      : Promise.resolve(undefined);
    const [featuredServices, youtubeVideoData] = await Promise.all([
      Promise.all(featuredServicesPromises),
      youtubeVideoDataPromise,
    ]);
    return {
      homePage: { ...home, featuredServices, heroVideo: { ...home.heroVideo, youtubeVideoData } },
      pageMetadata,
    };
  }
  // TODO: We really shouldn't 404 on the home page.
  throw error(404);
};
