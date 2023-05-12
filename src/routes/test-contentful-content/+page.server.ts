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

export async function load(): Promise<Document> {
  const data = await contentfulFetch(query);
  if (data) {
    return data?.testRichText?.body?.json;
  } else {
    const document = markdownDocument.document;
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
