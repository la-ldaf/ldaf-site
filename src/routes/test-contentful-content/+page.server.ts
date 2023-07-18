import gql from "graphql-tag";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { Document } from "@contentful/rich-text-types";
import type { EntryQuery } from "./$queries.generated";

const query = gql`
  query Entry {
    testRichText(id: "V7ibT9I8Vg99iKsDgLhsK") {
      title
      body {
        json
      }
    }
  }
`;

export const load = async ({ fetch }) => {
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
    fetch,
  });
  const data = await client.fetch<EntryQuery>(query);
  return {
    document:
      (data?.testRichText?.body?.json as Document | undefined | null) ?? markdownDocument.document,
  };
};
