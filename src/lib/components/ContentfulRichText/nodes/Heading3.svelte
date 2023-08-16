<script lang="ts">
  import type { Heading3 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading3;
</script>

<h3>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h3>
