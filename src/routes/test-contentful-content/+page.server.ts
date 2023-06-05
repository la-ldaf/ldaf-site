import gql from "graphql-tag";
import { print as printQuery } from "graphql";
import contentfulFetch from "$lib/services/contentful";
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

export async function load(): Promise<Document> {
  const data = await contentfulFetch<EntryQuery>(printQuery(query));
  if (data) {
    return data?.testRichText?.body?.json;
  } else {
    return markdownDocument.document;
  }
}
