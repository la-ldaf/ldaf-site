<script lang="ts">
  import type { Quote } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Quote;
</script>

<blockquote>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</blockquote>
