<script lang="ts">
  import { error } from "@sveltejs/kit";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";

  export let document: Document;

  // export let document;
  // $: ({ content } = document);
  // $: id = Symbol(content)
  // $: console.log("content", JSON.stringify(content, null, 2));
  if (!isDocument(document)) {
    throw error(500, {
      title: "We could not render this page.",
      message: "Contentful connection failed and fallback document does not match expected format.",
    });
  }
</script>

{#each document.content as subNode (crypto.randomUUID())}
  <Node node={subNode} />
{/each}
<!-- <pre>
  {JSON.stringify(document.content, null, 2)}
</pre> -->
