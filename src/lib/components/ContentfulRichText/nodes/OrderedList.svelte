<script lang="ts">
  import type { Node as NodeType, OrderedList } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isOrderedList } from "../predicates";

  export let node: NodeType;

  let ol: OrderedList;
  if (!isOrderedList(node)) {
    throw new Error("node is not a paragraph");
  }
  ol = node;
</script>

<ol>
  {#each ol.content as subNode}
    <Node node={subNode} />
  {/each}
</ol>
