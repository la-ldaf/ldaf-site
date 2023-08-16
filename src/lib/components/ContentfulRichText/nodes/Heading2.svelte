<script lang="ts">
  import type { Heading2 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading2;
</script>

<h2>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h2>
