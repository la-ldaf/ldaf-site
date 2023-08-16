<script lang="ts">
  import type { Table } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Table;
</script>

<table>
  <tbody>
    {#each node.content as subNode}
      <Node node={subNode} />
    {/each}
  </tbody>
</table>
