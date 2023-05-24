<script lang="ts">
  import { error } from "@sveltejs/kit";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";

  // We support "unknown" here because we always check if we've received a document type, and the
  // type of the rich text JSON returned from Contentful (which is auto-generated based on the
  // schema) is always "unknown"
  export let document: Document | unknown;

  $: doc = document as Document;
  $: if (!isDocument(doc)) {
    throw error(500, {
      title: "We could not render this page.",
      message:
        "Provided document was in the incorrect format. Contentful may have returned bad data, or the Contentful connection may have failed and the fallback data was bad.",
    });
  }
</script>

{#each doc.content as subNode (crypto.randomUUID())}
  <Node node={subNode} />
{/each}
