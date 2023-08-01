import {
  BLOCKS,
  INLINES,
  type Node,
  type Document,
  type Paragraph,
  type Text,
  type Hr,
  type UnorderedList,
  type OrderedList,
  type ListItem,
  type Hyperlink,
  type Table,
  type TableRow,
  type TableHeaderCell,
  type TableCell,
  type Quote,
  type AssetLinkBlock,
  type AssetHyperlink,
  type EntryLinkBlock,
  type EntryHyperlink,
  type EntryLinkInline,
} from "@contentful/rich-text-types";

import type { HeadingLevel, HeadingTypeByLevel } from "./headings";
import type EmbeddedEntry from "./nodes/EmbeddedEntry.svelte";
import type EmbeddedEntryBlock from "./nodes/EmbeddedEntryBlock.svelte";

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

export const isHeading = <L extends HeadingLevel>(
  level: L,
  n: unknown
): n is HeadingTypeByLevel<L> => isNode(n) && n.nodeType === `heading-${level}`;

export const isHr = (n: unknown): n is Hr => isNode(n) && n.nodeType === BLOCKS.HR;

export const isText = (n: unknown): n is Text => isNode(n) && n.nodeType === "text";

export const isQuote = (n: unknown): n is Quote => isNode(n) && n.nodeType === BLOCKS.QUOTE;

export const isUnorderedList = (n: unknown): n is UnorderedList =>
  isNode(n) && n.nodeType === BLOCKS.UL_LIST;

export const isOrderedList = (n: unknown): n is OrderedList =>
  isNode(n) && n.nodeType === BLOCKS.OL_LIST;

export const isListItem = (n: unknown): n is ListItem =>
  isNode(n) && n.nodeType === BLOCKS.LIST_ITEM;

export const isHyperlink = (n: unknown): n is Hyperlink =>
  isNode(n) && n.nodeType === INLINES.HYPERLINK;

export const isTable = (n: unknown): n is Table => isNode(n) && n.nodeType === BLOCKS.TABLE;
export const isTableRow = (n: unknown): n is TableRow =>
  isNode(n) && n.nodeType === BLOCKS.TABLE_ROW;
export const isTableHeaderCell = (n: unknown): n is TableHeaderCell =>
  isNode(n) && n.nodeType === BLOCKS.TABLE_HEADER_CELL;
export const isTableCell = (n: unknown): n is TableCell =>
  isNode(n) && n.nodeType === BLOCKS.TABLE_CELL;

export const isAssetBlock = (n: unknown): n is AssetLinkBlock =>
  isNode(n) && n.nodeType === BLOCKS.EMBEDDED_ASSET;

export const isEntryBlock = (n: unknown): n is EntryLinkBlock =>
  isNode(n) && n.nodeType === BLOCKS.EMBEDDED_ENTRY;

export const isAssetHyperlink = (n: unknown): n is AssetHyperlink =>
  isNode(n) && n.nodeType === INLINES.ASSET_HYPERLINK;

export const isEntryHyperlink = (n: unknown): n is EntryHyperlink =>
  isNode(n) && n.nodeType === INLINES.ENTRY_HYPERLINK;

export const isEmbeddedEntry = (n: unknown): n is EntryLinkInline =>
  isNode(n) && n.nodeType === INLINES.EMBEDDED_ENTRY;
