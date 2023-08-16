<script lang="ts">
  import type { Heading4 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading4;
</script>

<h4>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h4>
