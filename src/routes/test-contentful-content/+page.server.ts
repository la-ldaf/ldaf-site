import gql from "graphql-tag";
import { error } from "@sveltejs/kit";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import { isDocument } from "$lib/components/ContentfulRichText/predicates";
import type { EntryQuery, EntryQueryVariables } from "./$queries.generated";

const query = gql`
  query Entry($preview: Boolean = false) {
    testRichText(id: "5rnSyvGBYQcFj5orQd8aRN", preview: $preview) {
      title
      body {
        json
      }
    }
  }
`;

export const load = async ({ locals: { contentfulClient } }) => {
  const { loc: _, ...sanitizedQuery } = query;

  if (!contentfulClient) {
    return {
      query: sanitizedQuery,
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

  return {
    query: sanitizedQuery,
    title,
    document,
  };
};
