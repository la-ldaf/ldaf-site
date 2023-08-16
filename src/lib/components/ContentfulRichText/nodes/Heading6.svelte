<script lang="ts">
  import type { Heading6 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading6;
</script>

<h6>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h6>
