import gql from "graphql-tag";
import { error } from "@sveltejs/kit";

import type { TopTierCollectionQuery } from "./$queries.generated";

const query = gql`
  query TopTierCollection($preview: Boolean = true) {
    topTierCollection(limit: 10, preview: $preview) {
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

export const load = async ({ parent, params, locals: { contentfulClient, logger } }) => {
  if (!contentfulClient) throw error(500); // TODO: offline fixtures
  const { pageMetadataMap } = await parent();
  const topTierSlug = params.topTierPage;
  const data = await contentfulClient.fetch<TopTierCollectionQuery>(query);

  if (!data) {
    await logger.logError(new Error(`query returned no response`));
    throw error(404);
  }

  // TODO: Possibly account for possiblity that two Top Tier pages (erroneously) have the same slug
  const matchedTopTier = data?.topTierCollection?.items?.find(
    (topTier) => topTier?.pageMetadata?.slug === topTierSlug
  );

  const matchedTopTierID = matchedTopTier?.pageMetadata?.sys?.id;

  const notFoundMessage = `A Top Tier entry with the slug "${topTierSlug}" could not be found. If this page was reached via a link, it is likely that the Page Metadata entry is published but the Top Tier entry is not.`;

  if (!matchedTopTierID) {
    await logger.logError(new Error(notFoundMessage));
    return;
  }

  const pageMetadata = pageMetadataMap.get(matchedTopTierID);

  if (!pageMetadata) await logger.logError(new Error(notFoundMessage));

  return { pageMetadata };
};
