<script lang="ts" generics="N extends AnyNode">
  import type { ComponentTakingNode, NodePredicate } from "../types";
  import {
    isSupportedNode,
    getComponentAndPredicate,
    type AnyNode,
    type NodeComponentAndPredicate,
  } from ".";

  export let node: N;

  let component: ComponentTakingNode<N> | undefined,
    predicate: NodePredicate<N> | undefined,
    isCorrectNodeType: boolean;

  $: if (!isSupportedNode(node)) {
    console.warn(`unsupported nodeType ${node.nodeType}`);
    [component, predicate, isCorrectNodeType] = [undefined, undefined, false];
  } else {
    [component, predicate] = getComponentAndPredicate(node) as NodeComponentAndPredicate<N>;
    isCorrectNodeType = predicate?.(node) ?? true;
  }
</script>

{#if component && predicate}
  {#if isCorrectNodeType}
    <svelte:component this={component} {node} />
  {:else}
    <p>Tried to render ${node.nodeType} with incorrect component ${component.name}!</p>
  {/if}
{:else}
  <!-- TODO: Remove before launch -->
  <p>Unsupported ContentfulRichText nodeType <code>{node.nodeType}</code></p>
{/if}
