<script lang="ts">
  import type { TableCell } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: TableCell;
</script>

<td>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</td>
