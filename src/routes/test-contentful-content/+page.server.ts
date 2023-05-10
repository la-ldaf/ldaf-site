import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/services/contentful";
import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
import { isDocument } from "$lib/components/ContentfulRichText/predicates";
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

export async function load() {
  const response = await contentfulFetch(query);
  if (response && response.ok) {
    const { data } = await response.json();
    return data.testRichText.body.json;
  } else {
    const document: Document = markdownDocument.document;
    if (!isDocument(document)) {
      throw error(500, {
        title: "We could not render this page.",
        message:
          "Contentful connection failed and fallback document does not match expected format.",
      });
    }
    return document;
  }
}
