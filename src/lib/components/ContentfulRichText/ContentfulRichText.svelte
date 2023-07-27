<script lang="ts">
  import { setContext } from "svelte";
  import { error } from "@sveltejs/kit";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";
  import type { Links } from "./types";
  import { linksKey, createLinksContext, blurhashesKey, type LinksContext } from "./context";

  // We support "unknown" here because we always check if we've received a document type, and the
  // type of the rich text JSON returned from Contentful (which is auto-generated based on the
  // schema) is always "unknown"
  export let document: Document | unknown;

  export let links: Links | undefined = undefined;
  setContext<LinksContext | undefined>(linksKey, links ? createLinksContext(links) : links);

  export let blurhashes: Record<string, string> | undefined = undefined;
  setContext<Record<string, string> | undefined>(blurhashesKey, blurhashes);

  if (!isDocument(document)) {
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
