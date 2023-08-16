<script lang="ts">
  import type { Heading5 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading5;
</script>

<h5>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h5>
