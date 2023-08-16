<script lang="ts">
  import type { ListItem } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: ListItem;
</script>

<li>
  {#each node.content as subNode}
    <Node node={subNode} />
  {/each}
</li>
