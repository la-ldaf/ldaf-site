import {
  type Node,
  type Document,
  type Paragraph,
  type Text,
  BLOCKS,
} from "@contentful/rich-text-types";

export const isNode = (n: unknown): n is Node =>
  typeof n === "object" &&
  n !== null &&
  "nodeType" in n &&
  typeof n.nodeType === "string" &&
  "data" in n &&
  typeof n.data === "object";

export const isDocument = (n: unknown): n is Document =>
  isNode(n) && n.nodeType === BLOCKS.DOCUMENT;

export const isParagraph = (n: unknown): n is Paragraph =>
  isNode(n) && n.nodeType === BLOCKS.PARAGRAPH;

export const isText = (n: unknown): n is Text => isNode(n) && n.nodeType === "text";
