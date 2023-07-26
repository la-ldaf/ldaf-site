import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { error } from "@sveltejs/kit";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { TopTierCollectionQuery } from "./$queries.generated";

const query = gql`
  query TopTierCollection {
    topTierCollection(limit: 10) {
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

export const load = async ({ parent, params }) => {
  const { pageMetadataMap } = await parent();
  const topTierSlug = params.topTierPage;
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<TopTierCollectionQuery>(printQuery(query));
  if (data) {
    // TODO: Possibly account for possiblity that two Top Tier pages (erroneously) have the same slug
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
    } else {
      console.warn(
        `A Top Tier entry with the slug "${topTierSlug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Top Tier entry is not.`
      );
    }
  }
  throw error(404);
};
