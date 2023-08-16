<script lang="ts">
  import type { UnorderedList } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: UnorderedList;
</script>

<ul>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</ul>
