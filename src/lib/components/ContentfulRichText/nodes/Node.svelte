<script lang="ts" generics="N extends AnyNode">
  import { isSupportedNode, getComponentAndPredicate, type AnyNode } from ".";
  import type { ComponentTakingNode, NodePredicate } from "../types";

  export let node: N;

  let component: ComponentTakingNode<N> | undefined,
    predicate: NodePredicate<N> | undefined,
    isCorrectNodeType: boolean;

  $: if (!isSupportedNode(node)) {
    console.warn(`unsupported nodeType ${node.nodeType}`);
    [component, predicate, isCorrectNodeType] = [undefined, undefined, false];
  } else {
    const componentAndPredicate = getComponentAndPredicate(node) as readonly [
      typeof component,
      typeof predicate
    ];
    [component, predicate] = componentAndPredicate;
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
  <p>Unsupported Rich Text nodeType ${node.nodeType}</p>
{/if}
