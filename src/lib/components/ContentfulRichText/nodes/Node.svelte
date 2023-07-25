<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from ".";

  export let node: Node;

  const component = nodes[node.nodeType];

  if (!component) {
    // throw new Error(`unsupported nodeType ${node.nodeType}`);
  }
</script>

{#if component}
  <svelte:component this={component} {node} />
{:else}
  Node type <pre>{node.nodeType}</pre>
  is not supported
{/if}

<style>
  pre {
    display: inline-block;
  }
</style>
