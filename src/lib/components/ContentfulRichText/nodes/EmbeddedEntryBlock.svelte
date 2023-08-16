<script lang="ts">
  import { getContext } from "svelte";
  import type { EntryLinkBlock } from "@contentful/rich-text-types";
  import { linksKey, type LinksContext, imageSizeTypeKey } from "../context";
  import { getSources } from "$lib/imageServices/contentful";
  import ContactCard from "$lib/components/ContactCard";
  import Image from "$lib/components/Image/Image.svelte";

  export let node: EntryLinkBlock;

  $: linksContext = getContext<LinksContext | undefined>(linksKey);
  $: entryID = node.data.target.sys.id;
  $: entryBlock = linksContext?.linksEntriesMaps.block.get(entryID);
</script>

{#if !entryBlock}
  <p><em>Error: embedded entry was not found in the context. Is it unpublished?</em></p>
{:else if entryBlock?.__typename === "Contact"}
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
