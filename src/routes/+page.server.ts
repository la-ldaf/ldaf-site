import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import { getBlurhash } from "$lib/services/blurhashes";

import type { HomeCollectionQuery } from "./$queries.generated";
import type { PageMetadataMapItem } from "$lib/loadPageMetadataMap";
import type { ExtractQueryType } from "$lib/util/types";
import homePageTestContent from "./__tests__/homePageTestContent";

const query = gql`
  query HomeCollection($metadataID: String!, $preview: Boolean = true) {
    homeCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
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

export const load = async ({
  parent,
  fetch,
  locals: { contentfulClient, logger },
}): Promise<HomePage> => {
  if (!contentfulClient) return homePageTestContent;
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    // Based on how we construct URLs, we should only ever have one entry with the root path (and regardless, the key is unique).
    const metadataID = pathsToIDs.get("/");
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const data = await contentfulClient.fetch<HomeCollectionQuery>(query, {
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
    const featuredServices = await Promise.all(featuredServicesPromises);
    return { homePage: { ...home, featuredServices }, pageMetadata };
  }
  // TODO: We really shouldn't 404 on the home page.
  await logger.logError(new Error("Home page was not found. Is it published?"));
  throw error(404);
};
