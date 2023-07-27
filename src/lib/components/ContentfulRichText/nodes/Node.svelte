<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from ".";

  export let node: Node;

  const component = nodes[node.nodeType];

  if (!component) {
    throw new Error(`unsupported nodeType ${node.nodeType}`);
  }
</script>

<!-- {#if node.nodeType === "embedded-asset-block"}
  Node type <pre>{node.nodeType}</pre>
  is not supported
{:else}
  <svelte:component this={component} {node} />
{/if} -->

<svelte:component this={component} {node} />

<!-- <style>
  pre {
    display: inline-block;
  }
</style> -->
