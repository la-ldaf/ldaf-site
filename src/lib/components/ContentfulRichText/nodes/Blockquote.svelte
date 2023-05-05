<script lang="ts">
  import type { Node as NodeType, Quote } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isQuote } from "../predicates";

  export let node: NodeType;

  let quote: Quote;
  if (!isQuote(node)) {
    throw new Error("node is not a blockquote");
  }
  quote = node;
</script>

<blockquote>
  {#each quote.content as subNode}
    <Node node={subNode} />
  {/each}
</blockquote>
