<script lang="ts">
  import type { OrderedList } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: OrderedList;
</script>

<ol>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</ol>
