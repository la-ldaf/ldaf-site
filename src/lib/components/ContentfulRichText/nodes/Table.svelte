<script lang="ts">
  import type { Node as NodeType, Table } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isTable } from "../predicates";

  export let node: NodeType;

  let table: Table;
  if (!isTable(node)) {
    throw new Error("node is not a paragraph");
  }
  table = node;
</script>

<table>
  <tbody>
    {#each table.content as subNode}
      <Node node={subNode} />
    {/each}
  </tbody>
</table>
