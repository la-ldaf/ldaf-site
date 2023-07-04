import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { Document } from "@contentful/rich-text-types";
import type { EntryQuery } from "./$queries.generated";

const query = gql`
  fragment imageProps on Asset {
    sys {
      id
    }
    title
    description
    url
    width
    height
  }

  query Entry {
    testRichText(id: "V7ibT9I8Vg99iKsDgLhsK") {
      title
      body {
        json
        links {
          assets {
            block {
              ...imageProps
            }
            hyperlink {
              ...imageProps
            }
          }
        }
      }
    }
  }
`;

export const load = async ({ fetch }) => {
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<EntryQuery>(printQuery(query));
  const blurhashes = Object.fromEntries(
    await Promise.all(
      data?.testRichText?.body?.links.assets.block
        .filter((item) => !!item)
        .flatMap(async (item) => {
          if (!item?.sys?.id || !item?.url) return [];
          const blurhashResponse = await fetch(`/api/v1/blurhash/${encodeURIComponent(item.url)}`);
          if (!blurhashResponse.ok) return [];
          return [item.sys.id, await blurhashResponse.text()];
        }) ?? []
    )
  );
  return {
    document:
      (data?.testRichText?.body?.json as Document | undefined | null) ?? markdownDocument.document,
    links: data?.testRichText?.body?.links,
    blurhashes,
  };
};
