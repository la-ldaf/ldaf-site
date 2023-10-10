<script lang="ts">
  import { getContext } from "svelte";
  import type { Node as NodeType, EntryLinkBlock } from "@contentful/rich-text-types";
  import { linksKey, type LinksContext, imageSizeTypeKey } from "../context";
  import { isEntryBlock } from "../predicates";
  import ContentfulRichText from "../ContentfulRichText.svelte";
  import { getSources } from "$lib/imageServices/contentful";
  import ContactCard from "$lib/components/ContactCard";
  import Image from "$lib/components/Image";

  export let node: NodeType;
  if (!isEntryBlock(node)) {
    throw new Error("Node is not an embedded entry block");
  }

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for embedded entry block");

  let entry: EntryLinkBlock = node;
  const entryId = entry.data.target.sys.id;
  const entryBlock = linksContext.linksEntriesMaps.block.get(entryId);

  if (!entryBlock) throw new Error(`the entry ${entryId} was not found in the context`);
</script>

{#if entryBlock?.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entryBlock]} />
{:else if entryBlock?.__typename === "ImageWrapper" && entryBlock?.linkedImage?.url}
  <Image
    src={entryBlock?.linkedImage?.url}
    sources={getSources}
    blurhash={entryBlock?.linkedImage?.blurhash ?? undefined}
    alt={entryBlock.linkedImage?.description ?? "Hero image"}
    width={entryBlock.linkedImage?.width ?? undefined}
    height={entryBlock.linkedImage?.height ?? undefined}
    sizeType={getContext(imageSizeTypeKey)}
  />
{:else if entryBlock?.__typename === "CallToAction" && entryBlock?.callToActionDestination?.json}
  <span class="embedded-entry-CTA">
    <ContentfulRichText
      document={entryBlock.callToActionDestination.json}
      links={entryBlock.callToActionDestination?.links}
    />
  </span>
{:else}
  <!--
    TODO: Add support for the other types of
    entries that can be an "embedded-entry-block":
      - Video Wrapper
      - Location
      - Anything else?
  -->
  <span
    >Entry block of type
    <pre>{entryBlock.__typename}</pre>
    is not supported
  </span>
{/if}

<style>
  pre {
    display: inline-block;
  }
</style>
