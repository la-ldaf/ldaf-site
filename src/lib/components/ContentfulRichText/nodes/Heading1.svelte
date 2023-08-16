<script lang="ts">
  import type { Heading1 } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Heading1;
</script>

<h1>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</h1>
