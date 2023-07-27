import gql from "graphql-tag";
import { error } from "@sveltejs/kit";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import { isDocument } from "$lib/components/ContentfulRichText/predicates";
import type { EntryQuery, EntryQueryVariables } from "./$queries.generated";

const query = gql`
  fragment ImageProps on Asset {
    sys {
      id
    }
    contentType
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
              ...ImageProps
            }
            hyperlink {
              ...ImageProps
            }
          }
        }
      }
    }
  }
`;

export const load = async ({ locals: { contentfulClient } }) => {
  if (!contentfulClient) {
    return {
      title: "Test Document",
      document: markdownDocument.document,
    };
  }

  const data = await contentfulClient.fetch<EntryQuery, EntryQueryVariables>(query);

  const { testRichText } = data;
  if (!testRichText) throw error(500, { message: "Failed to load entry" });

  const title = testRichText.title;
  if (!title) throw error(500, { message: "Entry title was missing" });

  const document = testRichText.body?.json;
  if (!isDocument(document)) throw error(500, { message: "Entry body was missing or misshapen" });

  const blurhashes = Object.fromEntries(
    await Promise.all(
      data.testRichText?.body?.links.assets.block
        .filter((item) => !!item)
        .flatMap(async (item) => {
          if (!item?.sys?.id || !item?.url || !item?.contentType?.startsWith("image/")) return [];
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
