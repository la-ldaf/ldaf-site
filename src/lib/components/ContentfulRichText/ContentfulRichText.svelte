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

  // We support "unknown" here because we always check if we've received a document type, and the
  // type of the rich text JSON returned from Contentful (which is auto-generated based on the
  // schema) is always "unknown"
  export let document: Document | unknown;

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

  $: doc = document as Document;
  $: if (!isDocument(doc)) {
    throw error(500, {
      title: "We could not render this page.",
      message:
        "Provided document was in the incorrect format. Contentful may have returned bad data, or the Contentful connection may have failed and the fallback data was bad.",
    });
  }
</script>

{#each doc.content as subNode (subNode)}
  <Node node={subNode} />
{/each}
