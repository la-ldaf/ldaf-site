import type { SvelteComponent } from "svelte";
import paragraph from "./Paragraph.svelte";
import text from "./Text.svelte";
import heading1 from "./Heading1.svelte";
import heading2 from "./Heading2.svelte";
import heading3 from "./Heading3.svelte";
import heading4 from "./Heading4.svelte";
import heading5 from "./Heading5.svelte";
import heading6 from "./Heading6.svelte";
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

const nodes: Record<string, typeof SvelteComponent> = {
  text,
  // Block Types (see https://github.com/contentful/rich-text/blob/3568691018866c2a4fdbfede27c0aa19f24b5b3f/packages/rich-text-types/src/blocks.ts)
  //
  paragraph,
  "heading-1": heading1,
  "heading-2": heading2,
  "heading-3": heading3,
  "heading-4": heading4,
  "heading-5": heading5,
  "heading-6": heading6,
  hr,
  blockquote,
  "unordered-list": unorderedList,
  "ordered-list": orderedList,
  "list-item": listItem,
  table,
  "table-row": tableRow,
  "table-header-cell": tableHeaderCell,
  "table-cell": tableCell,

  "embedded-entry-block": embeddedEntryBlock, // TODO: Finish this component
  "embedded-asset-block": embeddedAssetBlock,
  // TODO: Potentially other components to handle
  // see https://github.com/contentful/rich-text/blob/3568691018866c2a4fdbfede27c0aa19f24b5b3f/packages/rich-text-types/src/blocks.ts
  // EMBEDDED_RESOURCE = 'embedded-resource-block',

  // Inline Types
  hyperlink,
  "entry-hyperlink": entryHyperlink,
  "asset-hyperlink": assetHyperlink,
  "embedded-entry-inline": embeddedEntry, // TODO: is this component needed?
};
export default nodes;
