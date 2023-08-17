import type {
  AssetHyperlink,
  AssetLinkBlock,
  EntryLinkBlock,
  EntryLinkInline,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hr,
  Hyperlink,
  EntryHyperlink,
  ListItem,
  Node,
  OrderedList,
  Paragraph,
  Quote,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  Text,
  UnorderedList,
  Inline,
  Block,
} from "@contentful/rich-text-types";

import {
  isAssetBlock,
  isAssetHyperlink,
  isEmbeddedEntry,
  isEntryBlock,
  isEntryHyperlink,
  isHeadingOfLevel,
  isHr,
  isHyperlink,
  isListItem,
  isOrderedList,
  isParagraph,
  isQuote,
  isTable,
  isTableCell,
  isTableHeaderCell,
  isTableRow,
  isText,
  isUnorderedList,
} from "../predicates";

import paragraph from "./Paragraph.svelte";
import text from "./Text.svelte";
import heading from "./Heading.svelte";
import hr from "./Hr.svelte";
import blockquote from "./Blockquote.svelte";
import unorderedList from "./UnorderedList.svelte";
import orderedList from "./OrderedList.svelte";
import listItem from "./ListItem.svelte";
import hyperlink from "./Hyperlink.svelte";
import table from "./Table.svelte";
import tableRow from "./TableRow.svelte";
import tableHeaderCell from "./TableHeaderCell.svelte";
import tableCell from "./TableCell.svelte";
import embeddedAssetBlock from "./EmbeddedAssetBlock.svelte";
import embeddedEntryBlock from "./EmbeddedEntryBlock.svelte";
import embeddedEntry from "./EmbeddedEntry.svelte";
import assetHyperlink from "./AssetHyperlink.svelte";
import entryHyperlink from "./EntryHyperlink.svelte";

import type { ComponentTakingNode, NodePredicate } from "../types";

export type SupportedNode =
  | AssetHyperlink
  | AssetLinkBlock
  | EntryHyperlink
  | EntryLinkBlock
  | EntryLinkInline
  | Heading1
  | Heading2
  | Heading3
  | Heading4
  | Heading5
  | Heading6
  | Hr
  | Hyperlink
  | ListItem
  | OrderedList
  | Paragraph
  | Quote
  | Table
  | TableCell
  | TableHeaderCell
  | TableRow
  | Text
  | UnorderedList;

export type AnyNode = Inline | Block | Text;

export type SupportedNodeTag = SupportedNode["nodeType"];

export type NodeComponentAndPredicate<N extends Node> = readonly [
  ComponentTakingNode<N>,
  NodePredicate<N>,
];

type Nodes = {
  [K in SupportedNodeTag]: NodeComponentAndPredicate<SupportedNodeTypesByTag[K]>;
};

export type SupportedNodeTypesByTag = Omit<
  {
    [K in SupportedNodeTag]: Extract<SupportedNode, { nodeType: K }>;
  },
  "table-cell"
> & {
  "table-cell": TableCell;
};

const nodes: Nodes = {
  text: [text, isText],
  paragraph: [paragraph, isParagraph],
  "heading-1": [heading, isHeadingOfLevel(1)],
  "heading-2": [heading, isHeadingOfLevel(2)],
  "heading-3": [heading, isHeadingOfLevel(3)],
  "heading-4": [heading, isHeadingOfLevel(4)],
  "heading-5": [heading, isHeadingOfLevel(5)],
  "heading-6": [heading, isHeadingOfLevel(6)],
  hr: [hr, isHr],
  blockquote: [blockquote, isQuote],
  "unordered-list": [unorderedList, isUnorderedList],
  "ordered-list": [orderedList, isOrderedList],
  "list-item": [listItem, isListItem],
  table: [table, isTable],
  "table-row": [tableRow, isTableRow],
  "table-header-cell": [tableHeaderCell, isTableHeaderCell],
  "table-cell": [tableCell, isTableCell],
  "embedded-entry-block": [embeddedEntryBlock, isEntryBlock],
  "embedded-asset-block": [embeddedAssetBlock, isAssetBlock],
  hyperlink: [hyperlink, isHyperlink],
  "entry-hyperlink": [entryHyperlink, isEntryHyperlink],
  "asset-hyperlink": [assetHyperlink, isAssetHyperlink],
  "embedded-entry-inline": [embeddedEntry, isEmbeddedEntry],
} as const;

export default nodes;

const supportedNodeTagsSet = new Set<string>(Object.keys(nodes));

export const isSupportedNodeTag = (tag: string): tag is SupportedNodeTag =>
  supportedNodeTagsSet.has(tag);

export const isSupportedNode = (node: AnyNode): node is SupportedNode =>
  isSupportedNodeTag(node.nodeType);

// This hard type assertion is safe only because of the following:
// - A SupportedNode's nodeType is always a SupportedNodeTag
// - nodes (of type Nodes) is a record of every SupportedNodeTag as T to a NodeComponentAndPredicate<T>
export const getComponentAndPredicate = <N extends SupportedNode>(node: N) =>
  nodes[node.nodeType] as unknown as NodeComponentAndPredicate<N>;
