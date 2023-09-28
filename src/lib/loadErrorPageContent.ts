import gql from "graphql-tag";
import { print as printQuery } from "graphql";

import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { getBlurhash } from "$lib/services/blurhashes";

import assetProps from "$lib/fragments/assetProps";
import entryProps from "$lib/fragments/entryProps";

import type { ErrorPageCollectionQuery } from "./$queries.generated";
import type { ExtractQueryType } from "$lib/util/types";

const query = gql`
  ${assetProps}
  ${entryProps}
  query ErrorPageCollection {
    # Limit is rather arbitrary; there are 40 possible client and server error
    #   messages, but it's unlikely that LDAF will write content for more than
    #   a few.
    errorCollection(limit: 10) {
      items {
        sys {
          # eslint-disable-next-line @graphql-eslint/selection-set-depth
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
type ErrorPage = BaseErrorPage & {
  image?: BaseErrorPage["image"] & {
    blurhash?: string | null | undefined;
  };
};
type ErrorPageMap = Map<number, ErrorPage>;

export const loadErrorPageContent = async ({
  fetch,
}: {
  fetch: typeof global.fetch;
}): Promise<ErrorPageMap> => {
  const errorPageMap: ErrorPageMap = new Map();
  fetchData: {
    if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) break fetchData;
    const client = getContentfulClient({
      spaceID: CONTENTFUL_SPACE_ID,
      token: CONTENTFUL_DELIVERY_API_TOKEN,
    });
    const data = await client.fetch<ErrorPageCollectionQuery>(printQuery(query));
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
  return errorPageMap;
};
