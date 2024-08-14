<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from ".";
  export let node: Node;
  $: component = nodes[node.nodeType];
  $: if (!component)
    console.warn(`Detected an unsupported node type in a Rich Text field: ${node.nodeType}`);
</script>

{#if component}
  <svelte:component this={component} {node} />
{:else}
  <p>Unsupported Rich Text nodeType {node.nodeType}</p>
{/if}
