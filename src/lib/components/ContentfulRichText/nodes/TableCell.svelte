<script lang="ts">
  import type { Node as NodeType, TableCell } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isTableCell } from "../predicates";

  export let node: NodeType;

  let tableCell: TableCell;
  if (!isTableCell(node)) {
    throw new Error("node is not a table cell");
  }
  tableCell = node;
</script>

<td>
  {#each tableCell.content as subNode}
    <Node node={subNode} />
  {/each}
</td>
