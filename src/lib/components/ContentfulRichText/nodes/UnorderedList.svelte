<script lang="ts">
  import type { Node as NodeType, UnorderedList } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isUnorderedList } from "../predicates";

  export let node: NodeType;

  let ul: UnorderedList;
  if (!isUnorderedList(node)) {
    throw new Error("node is not a paragraph");
  }
  ul = node;
</script>

<ul>
  {#each ul.content as subNode}
    <Node node={subNode} />
  {/each}
</ul>
