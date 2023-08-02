import type { Document } from "@contentful/rich-text-types";
import type { Links } from "./types";

import documentWithParagraphData from "./document-with-paragraph.json";
import documentWithParagraphExpected from "./document-with-paragraph.expected.html?raw";

import markdownDocumentData from "./markdown-document.md.json";
import markdownDocumentExpected from "./markdown-document.md.html?raw";

type Case = { document: Document; links: Links; expectedHTML: string };

export const documentWithParagraph: Case = {
  document: documentWithParagraphData as Document,
  links: { assets: { hyperlink: [], block: [] } },
  expectedHTML: documentWithParagraphExpected,
};

export const markdownDocument: Case = {
  document: markdownDocumentData.document as Document,
  links: markdownDocumentData.links,
  expectedHTML: markdownDocumentExpected,
};

const cases: Record<string, Case> = {
  documentWithParagraph,
  markdownDocument,
};

export default cases;
