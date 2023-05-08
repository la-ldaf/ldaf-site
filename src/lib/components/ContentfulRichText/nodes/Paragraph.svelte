<script lang="ts">
  import type { Node as NodeType, Paragraph } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isParagraph } from "../predicates";

  export let node: NodeType;

  let paragraph: Paragraph;
  if (!isParagraph(node)) {
    throw new Error("node is not a paragraph");
  }
  paragraph = node;
</script>

<p>
  {#each paragraph.content as subNode}
    <Node node={subNode} />
  {/each}
</p>
