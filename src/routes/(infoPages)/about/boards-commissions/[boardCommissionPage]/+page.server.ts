import { error } from "@sveltejs/kit";
import gql from "graphql-tag";

import type { BoardsCommissionsCollectionQuery } from "./$queries.generated";

const query = gql`
  query BoardsCommissionsCollection($preview: Boolean = false) {
    boardsAndCommissionsCollection(limit: 100, preview: $preview) {
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

export const load = async ({ parent, locals: { contentfulClient, logger }, params }) => {
  // TODO: offline fixtures
  if (!contentfulClient) throw error(500);

  const slug = params.boardCommissionPage;
  const data = await contentfulClient.fetch<BoardsCommissionsCollectionQuery>(query);

  if (!data) {
    await logger.logError(new Error("Contentful client GraphQL fetch returned no data"));
  }

  const { pageMetadataMap } = await parent();
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
  } else {
    await logger.logError(
      new Error(
        `A Board or Commission entry with the slug "${slug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Board or Commission entry is not.`
      )
    );
  }
};
