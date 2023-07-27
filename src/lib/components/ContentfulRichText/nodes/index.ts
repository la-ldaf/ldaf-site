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
import entryHyperlink from "./EntryHyperlink.svelte";
import hyperlink from "./Hyperlink.svelte";
import table from "./Table.svelte";
import tableRow from "./TableRow.svelte";
import tableHeaderCell from "./TableHeaderCell.svelte";
import tableCell from "./TableCell.svelte";
import embeddedAssetBlock from "./EmbeddedAssetBlock.svelte";
import assetHyperlink from "./AssetHyperlink.svelte";

const nodes: Record<string, typeof SvelteComponent> = {
  paragraph,
  text,
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
  "entry-hyperlink": entryHyperlink,
  hyperlink,
  table,
  "table-row": tableRow,
  "table-header-cell": tableHeaderCell,
  "table-cell": tableCell,
  "embedded-asset-block": embeddedAssetBlock,
  "asset-hyperlink": assetHyperlink,
};
export default nodes;
