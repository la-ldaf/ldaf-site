<script lang="ts">
  import type { Node as NodeType, ListItem } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isListItem } from "../predicates";

  export let node: NodeType;

  let li: ListItem;
  if (!isListItem(node)) {
    throw new Error("node is not a paragraph");
  }
  li = node;
</script>

<li>
  {#each li.content as subNode}
    <Node node={subNode} />
  {/each}
</li>
