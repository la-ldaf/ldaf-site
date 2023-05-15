<script lang="ts">
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";
  import { markdownDocument } from "./__tests__/documents";
  import { isDocument } from "./predicates";

  export let document: Document = markdownDocument.document;

  if (!isDocument(document)) {
    throw new Error("document prop is not a document");
  }
</script>

{#each document.content as subNode}
  <Node node={subNode} />
{/each}
