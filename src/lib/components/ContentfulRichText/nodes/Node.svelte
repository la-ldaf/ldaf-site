<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from ".";

  export let node: Node;
  // $: node;
  // $: component = nodes[node.nodeType];
  let num;
  const component = nodes[node.nodeType];
  if (component) {
    num = Math.random();
  }
  if (!component) {
    // throw new Error(`unsupported nodeType ${node.nodeType}`);
  }
</script>

{#if component}
  <!-- {node.nodeType} -->
  <!-- {component} -->
  <svelte:component this={component} {node} />
{:else}
  Node type <pre>{node.nodeType}</pre>
  is not supported
{/if}

<!-- <pre> -->
<!-- {JSON.stringify(node, null, 2)} -->
<!-- {JSON.stringify(component, null, 2)} -->
<!-- {JSON.stringify(node, null, 2)} -->

<!-- {node} -->
<!-- </pre> -->

<style>
  pre {
    display: inline-block;
  }
</style>
