import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import type { TopTierCollectionQuery } from "./$queries.generated";

const query = gql`
  query TopTierCollection($preview: Boolean = true) {
    topTierCollection(limit: 10, preview: $preview) {
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

export const load = async ({ parent, params, locals: { contentfulClient, logger } }) => {
  if (!contentfulClient) throw error(500); // TODO: offline fixtures
  const { pageMetadataMap } = await parent();
  const topTierSlug = params.topTierPage;

  const data = contentfulClient && (await contentfulClient.fetch<TopTierCollectionQuery>(query));

  if (!data) {
    await logger.logError(new Error(`query returned no response`));
    console.warn(
      `A Top Tier entry with the slug "${topTierSlug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Top Tier entry is not.`
    );
    throw error(404);
  }
  // TODO: Possibly account for possibility that two Top Tier pages (erroneously) have the same slug
  const matchedTopTier = data?.topTierCollection?.items?.find(
    (topTier) => topTier?.pageMetadata?.slug === topTierSlug
  );
  const matchedTopTierId = matchedTopTier?.pageMetadata?.sys?.id;
  if (matchedTopTierId) {
    const pageMetadata = pageMetadataMap.get(matchedTopTierId);
    if (pageMetadata) {
      // Get the URLs for these features from the pageMetadataMap
      const featuredServices = matchedTopTier.featuredServiceListCollection?.items.map(
        (featuredItem) => {
          const featuredItemMetadata = pageMetadataMap.get(
            featuredItem?.pageMetadata?.sys.id || ""
          );
          return { ...featuredItem, url: featuredItemMetadata?.url };
        }
      );
      return {
        __typename: matchedTopTier.__typename,
        topTierPage: { ...matchedTopTier, featuredServices },
        pageMetadata,
      };
    }
  }
};
