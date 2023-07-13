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
        return { pageMetadata };
      }
    }
  }
  throw error(404);
};
