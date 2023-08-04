<script lang="ts">
  import type { Node as NodeType, TableHeaderCell } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isTableHeaderCell } from "../predicates";

  export let node: NodeType;

  let tableHeaderCell: TableHeaderCell;
  if (!isTableHeaderCell(node)) {
    throw new Error("node is not a table header cell");
  }
  tableHeaderCell = node;
</script>

<th>
  {#each tableHeaderCell.content as subNode}
    <Node node={subNode} />
  {/each}
</th>
