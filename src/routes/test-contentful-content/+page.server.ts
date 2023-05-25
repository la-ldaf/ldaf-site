import gql from "graphql-tag";
import { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN } from "$env/static/private";
import getContentfulClient from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { Document } from "@contentful/rich-text-types";
import type { EntryQuery } from "./$queries.generated";

const query = gql`
  query Entry($preview: Boolean = false) {
    testRichText(id: "V7ibT9I8Vg99iKsDgLhsK", preview: $preview) {
      title
      body {
        json
      }
    }
  }
`;

export const load = async () => {
  const { loc: _, ...sanitizedQuery } = query;
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_DELIVERY_API_TOKEN) {
    return {
      query: sanitizedQuery,
      document: markdownDocument.document,
    };
  }
  const client = getContentfulClient({
    spaceID: CONTENTFUL_SPACE_ID,
    token: CONTENTFUL_DELIVERY_API_TOKEN,
  });
  const data = await client.fetch<EntryQuery>(query);
  if (data) {
    const document = data?.testRichText?.body?.json as Document | undefined | null;
    return {
      query: sanitizedQuery,
      document: document || markdownDocument.document,
    };
  } else {
    return {
      query: sanitizedQuery,
      document: markdownDocument.document,
    };
  }
};
