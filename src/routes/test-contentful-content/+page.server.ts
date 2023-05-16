import contentfulFetch from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import type { Document } from "@contentful/rich-text-types";

const query = `
{
  testRichText(id: "V7ibT9I8Vg99iKsDgLhsK") {
    title
    body {
      json
    }
  }
}
`;

export async function load(): Promise<Document> {
  const response = await contentfulFetch(query);
  if (response && response.ok) {
    const { data } = await response.json();
    return data.testRichText.body.json;
  } else {
    return markdownDocument.document;
  }
}
