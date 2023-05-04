import type { Document } from "@contentful/rich-text-types";

import documentWithParagraphData from "./document-with-paragraph.json";
import documentWithParagraphExpected from "./document-with-paragraph.expected.html?raw";

import markdownDocumentData from "./markdown-document.md.json";
import markdownDocumentExpected from "./markdown-document.md.html?raw";

export const documentWithParagraph = {
  document: documentWithParagraphData as Document,
  expectedHTML: documentWithParagraphExpected,
};

export const markdownDocument = {
  document: markdownDocumentData as Document,
  expectedHTML: markdownDocumentExpected,
};

export default {
  documentWithParagraph,
  markdownDocument,
};
