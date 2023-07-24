import { error } from "@sveltejs/kit";
import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";

import type { BoardsCommissionsCollectionQuery } from "./$queries.generated";

const query = gql`
  query BoardsCommissionsCollection {
    boardsAndCommissionsCollection(limit: 100) {
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
  const slug = params.boardCommissionPage;
  if (CONTENTFUL_SPACE_ID && CONTENTFUL_DELIVERY_API_TOKEN) {
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<BoardsCommissionsCollectionQuery>(printQuery(query));
    if (data) {
      const matchedBoardCommissionPage = data?.boardsAndCommissionsCollection?.items?.find(
        (boardCommission) => boardCommission?.pageMetadata?.slug === slug
      );
      if (matchedBoardCommissionPage) {
        const pageMetadataId = matchedBoardCommissionPage?.pageMetadata?.sys?.id;
        if (pageMetadataId) {
          const pageMetadata = pageMetadataMap.get(pageMetadataId);
          if (pageMetadata) {
            return {
              boardCommissionPage: matchedBoardCommissionPage,
              pageMetadata,
            };
          }
        }
      }
    }
  }
  throw error(404);
};
