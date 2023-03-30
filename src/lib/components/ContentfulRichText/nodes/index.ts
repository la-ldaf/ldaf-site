import type { SvelteComponent } from "svelte";
import { default as paragraph } from "./Paragraph.svelte";
import { default as text } from "./Text.svelte";
import { default as heading1 } from "./Heading1.svelte";
import { default as heading2 } from "./Heading2.svelte";
import { default as heading3 } from "./Heading3.svelte";
import { default as heading4 } from "./Heading4.svelte";
import { default as heading5 } from "./Heading5.svelte";
import { default as heading6 } from "./Heading6.svelte";
import { default as hr } from "./Hr.svelte";
import { default as blockquote } from "./Blockquote.svelte";
import { default as unorderedList } from "./UnorderedList.svelte";
import { default as orderedList } from "./OrderedList.svelte";
import { default as listItem } from "./ListItem.svelte";
import { default as hyperlink } from "./Hyperlink.svelte";
import { default as table } from "./Table.svelte";
import { default as tableRow } from "./TableRow.svelte";
import { default as tableHeaderCell } from "./TableHeaderCell.svelte";
import { default as tableCell } from "./TableCell.svelte";

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
  hyperlink,
  table,
  "table-row": tableRow,
  "table-header-cell": tableHeaderCell,
  "table-cell": tableCell,
};
export default nodes;
