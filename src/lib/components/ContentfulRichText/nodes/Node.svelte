<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from ".";
  export let node: Node;
  $: component = nodes[node.nodeType];
  $: if (!component) console.warn(`unsupported nodeType ${node.nodeType}`);
</script>

{#if component}
  <svelte:component this={component} {node} />
{:else}
  <p>Unsupported Rich Text nodeType {node.nodeType}</p>
{/if}
