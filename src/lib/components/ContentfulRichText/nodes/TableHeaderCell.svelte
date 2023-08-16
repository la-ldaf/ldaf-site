<script lang="ts">
  import type { TableHeaderCell } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: TableHeaderCell;
</script>

<th>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</th>
