<script lang="ts">
  import type { Document, Node as NodeType } from "@contentful/rich-text-types";
  import Node from "../Node.svelte";
  import { isDocument } from "../predicates";

  export let node: NodeType;

  let document: Document;
  if (!isDocument(node)) {
    throw new Error("node is not a document");
  }
  document = node;
</script>

{#each document.content as subNode}
  <Node node={subNode} />
{/each}
