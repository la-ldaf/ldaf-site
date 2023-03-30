import type { Document } from "@contentful/rich-text-types";

import documentWithParagraph from "./document-with-paragraph.json";
import documentWithParagraphExpected from "./document-with-paragraph.expected.html?raw";

export default {
  documentWithParagraph: {
    document: documentWithParagraph as Document,
    expectedHTML: documentWithParagraphExpected,
  },
};
