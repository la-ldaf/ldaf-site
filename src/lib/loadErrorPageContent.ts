import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import type { ContentfulClient } from "$lib/services/server/contentful";
import { getBlurhash } from "$lib/services/blurhashes";

import assetProps from "$lib/fragments/assetProps";
import entryProps from "$lib/fragments/entryProps";

import type { ErrorPageCollectionQuery } from "./$queries.generated";
import type { ExtractQueryType } from "$lib/util/types";

// TODO: This runs once when the server starts; we should instead run it once per user session.
let ERROR_CONTENT_LOADED = false;
const errorPageMap: ErrorPageMap = new Map();

const query = gql`
  ${assetProps}
  ${entryProps}
  # eslint-disable @graphql-eslint/selection-set-depth
  query ErrorPageCollection($preview: Boolean = false) {
    # Limit is rather arbitrary; there are 40 possible client and server error
    #   messages, but it's unlikely that LDAF will write content for more than
    #   a few.
    errorCollection(limit: 10, preview: $preview) {
      items {
        sys {
          id
        }
        metaTitle
        errorCode
        image {
          ... on Asset {
            ...AssetProps
          }
        }
        heading
        subhead

        body {
          json
          links {
            assets {
              hyperlink {
                ...AssetProps
              }
            }

            entries {
              hyperlink {
                ...EntryProps
              }
            }
          }
        }
      }
    }
  }
`;

type BaseErrorPage = ExtractQueryType<
  ErrorPageCollectionQuery,
  ["errorCollection", "items", number]
>;
// eslint-enable @graphql-eslint/selection-set-depth

type ErrorPage = BaseErrorPage & {
  image?: BaseErrorPage["image"] & {
    blurhash?: string | null | undefined;
  };
};
type ErrorPageMap = Map<number, ErrorPage>;

export const loadErrorPageContent = async ({
  fetch,
  contentfulClient,
}: {
  fetch: typeof global.fetch;
  contentfulClient?: ContentfulClient;
}): Promise<ErrorPageMap> => {
  if (!ERROR_CONTENT_LOADED) {
    fetchData: {
      if (!contentfulClient) break fetchData;
      const data = await contentfulClient.fetch<ErrorPageCollectionQuery>(printQuery(query));
      if (!data?.errorCollection?.items) break fetchData;
      const errorPagePromises =
        data.errorCollection.items.map(async (errorPage) => {
          if (errorPage) {
            const errorPageImageURL = errorPage?.image?.url;
            const errorPageImageBlurhash =
              errorPageImageURL && (await getBlurhash(errorPageImageURL, { fetch }));
            return {
              ...errorPage,
              image: errorPage?.image
                ? { ...errorPage.image, blurhash: errorPageImageBlurhash }
                : undefined,
            };
          }
        }) ?? [];
      const errorPages = await Promise.all(errorPagePromises);
      errorPages.forEach((errorPage) => {
        if (errorPage?.errorCode) {
          errorPageMap.set(errorPage.errorCode, errorPage);
        }
      });
    }
    ERROR_CONTENT_LOADED = true;
  }
  return errorPageMap;
};
