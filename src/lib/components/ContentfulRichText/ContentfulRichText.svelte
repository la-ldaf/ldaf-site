<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { error } from "@sveltejs/kit";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";
  import Node from "./nodes/Node.svelte";
  import type { Document } from "@contentful/rich-text-types";
  import type { Links } from "./types";
  import type { PageMetadataMap } from "$lib/loadPageMetadataMap";
  import {
    linksKey,
    createLinksContext,
    blurhashesKey,
    type LinksContext,
    imageSizeTypeKey,
  } from "./context";
  import type { SizeType } from "$lib/constants/images";

  export let document: Document;

  export let links: Links | undefined = undefined;
  $: pageMetadataMap = getContext<PageMetadataMap>(pageMetadataMapKey);
  $: setContext<LinksContext | undefined>(
    linksKey,
    links ? createLinksContext(links, pageMetadataMap) : links
  );

  export let blurhashes: Record<string, string> | null | undefined = undefined;
  $: setContext<Record<string, string> | null | undefined>(blurhashesKey, blurhashes);

  export let imageSizeType: SizeType = "col-12";
  $: setContext<string>(imageSizeTypeKey, imageSizeType);

  $: if (!isDocument(document)) {
    throw error(500, {
      title: "We could not render this page.",
      message: "Contentful connection failed and fallback document does not match expected format.",
    });
  }
</script>

{#key document}
  {#each document.content as subNode}
    <Node node={subNode} />
  {/each}
{/key}
