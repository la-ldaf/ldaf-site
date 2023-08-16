<script lang="ts">
  import type { TableRow } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: TableRow;
</script>

<tr>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</tr>
