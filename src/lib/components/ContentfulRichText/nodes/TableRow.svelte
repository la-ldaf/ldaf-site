<script lang="ts">
  import type { Node as NodeType, TableRow } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isTableRow } from "../predicates";

  export let node: NodeType;

  let tableRow: TableRow;
  if (!isTableRow(node)) {
    throw new Error("node is not a paragraph");
  }
  tableRow = node;
</script>

<tr>
  {#each tableRow.content as subNode}
    <Node node={subNode} />
  {/each}
</tr>
