<script lang="ts">
  import type { Paragraph } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Paragraph;
</script>

<p>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</p>
