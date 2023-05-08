<script lang="ts">
  import Node from "./nodes/Node.svelte";
  import type { TopLevelBlock } from "@contentful/rich-text-types";

  export let content: TopLevelBlock[];
</script>

{#each content as subNode}
  <Node node={subNode} />
{/each}
