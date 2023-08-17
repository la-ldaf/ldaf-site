<script lang="ts" context="module">
  import type {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
  } from "@contentful/rich-text-types";
  type AnyHeading = Heading1 | Heading2 | Heading3 | Heading4 | Heading5 | Heading6;
</script>

<script lang="ts" generics="H extends AnyHeading">
  import Node from "./Node.svelte";
  export let node: H;
  $: [_, level] = node.nodeType.match(/^heading-([1-6])$/) ?? [];
  $: tag = `h${level}`;
</script>

{#if tag}
  <svelte:element this={tag}>
    {#each node.content as subNode}
      <Node node={subNode} />
    {/each}
  </svelte:element>
{/if}
