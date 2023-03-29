<script lang="ts">
  import type { Node } from "@contentful/rich-text-types";
  import nodes from "./nodes";

  export let node: Node;

  const component = nodes[node.nodeType];

  if (!component) {
    throw new Error(`unsupported nodeType ${node.nodeType}`);
  }
</script>

<svelte:component this={component} {node} />
