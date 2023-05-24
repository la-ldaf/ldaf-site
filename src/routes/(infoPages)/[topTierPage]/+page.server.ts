import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { getBlurhash } from "$lib/services/blurhashes";

import type { TopTierCollectionQuery } from "./$queries.generated";

const query = gql`
  query TopTierCollection($metadataID: String!, $preview: Boolean = true) {
    topTierCollection(
      where: { pageMetadata: { sys: { id: $metadataID } } }
      limit: 1
      preview: $preview
    ) {
      items {
        __typename
        title
        subheading
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
        video {
          ... on VideoWrapper {
            videoTitle
            videoSubhead
            videoUrl
          }
        }
        description {
          json
        }
        featuredServiceListCollection {
          items {
            ... on ServiceGroup {
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
              pageMetadata {
                ... on PageMetadata {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
        pageMetadata {
          ... on PageMetadata {
            sys {
              id
            }
            slug
          }
        }
      }
    }
  }
`;

export const load = async ({
  parent,
  params: { topTierPage: slug },
  fetch,
  locals: { contentfulClient, logger },
}) => {
  const { pageMetadataMap, pathsToIDs } = await parent();
  fetchData: {
    // TODO: offline fixtures
    if (!contentfulClient) break fetchData;
    const metadataID = pathsToIDs.get(`/${slug}`);
    if (!metadataID) break fetchData;
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (!pageMetadata) break fetchData;
    const data = await contentfulClient.fetch<TopTierCollectionQuery>(query, {
      variables: { metadataID },
    });
    if (!data) break fetchData;

    const [matchedTopTier] = data?.topTierCollection?.items ?? [];
    if (!matchedTopTier) break fetchData;

    const heroImageURL = matchedTopTier.heroImage?.imageSource?.url;
    const heroImageBlurhashPromise = heroImageURL
      ? getBlurhash(heroImageURL, { fetch })
      : Promise.resolve(undefined);

    // Get the URLs for these features from the pageMetadataMap
    const featuredServicesPromises =
      matchedTopTier.featuredServiceListCollection?.items.map(async (featuredItem) => {
        if (!featuredItem) return [];
        const featuredItemMetadata = pageMetadataMap.get(featuredItem?.pageMetadata?.sys.id || "");
        const heroImageURL = featuredItem?.heroImage?.imageSource?.url;
        const heroImageBlurhash = heroImageURL && (await getBlurhash(heroImageURL, { fetch }));
        return [
          {
            ...featuredItem,
            url: featuredItemMetadata?.url,
            heroImage: featuredItem.heroImage
              ? {
                  ...featuredItem.heroImage,
                  imageSource: featuredItem.heroImage.imageSource
                    ? {
                        ...featuredItem.heroImage.imageSource,
                        blurhash: heroImageBlurhash,
                      }
                    : undefined,
                }
              : undefined,
          },
        ];
      }) ?? [];

    const [heroImageBlurhash, featuredServices] = await Promise.all([
      heroImageBlurhashPromise,
      Promise.all(featuredServicesPromises).then((arr) => arr.flat()),
    ]);

    return {
      __typename: matchedTopTier.__typename,
      topTierPage: {
        ...matchedTopTier,
        featuredServices,
        heroImage: matchedTopTier.heroImage
          ? {
              ...matchedTopTier.heroImage,
              imageSource: matchedTopTier.heroImage.imageSource
                ? {
                    ...matchedTopTier.heroImage.imageSource,
                    blurhash: heroImageBlurhash,
                  }
                : undefined,
            }
          : undefined,
      },
      pageMetadata,
    };
  }

  const notFoundMessage = `A Top Tier entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Top Tier entry is not.`;
  await logger.logError(new Error(notFoundMessage));
  throw error(404, { message: notFoundMessage });
};
