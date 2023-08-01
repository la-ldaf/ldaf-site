<script lang="ts">
  import { setContext } from "svelte";
  import { error } from "@sveltejs/kit";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";
  import type { Links } from "./types";
  import { linksKey, createLinksContext, blurhashesKey, type LinksContext } from "./context";

  export let document: Document;

  export let links: Links | undefined = undefined;
  $: setContext<LinksContext | undefined>(linksKey, links ? createLinksContext(links) : links);

  export let blurhashes: Record<string, string> | null | undefined = undefined;
  $: setContext<Record<string, string> | null | undefined>(blurhashesKey, blurhashes);

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
