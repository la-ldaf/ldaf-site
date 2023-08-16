<script lang="ts">
  import type { AssetLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import { linksKey, blurhashesKey, type LinksContext, imageSizeTypeKey } from "../context";
  import { getSources } from "$lib/imageServices/contentful";
  import Link from "$lib/components/Link/Link.svelte";

  export let node: AssetLinkBlock;

  $: linksContext = getContext<LinksContext | undefined>(linksKey);
  $: id = node.data.target.sys.id;
  $: link = linksContext?.linksAssetsMaps.block.get(id);
  $: ({ url } = link ?? { url: undefined });
  $: isImage = link?.contentType?.startsWith("image/") ?? false;

  $: blurhashes = getContext<Record<string, string> | null | undefined>(blurhashesKey);
  $: blurhash = id && blurhashes?.[id];
</script>

{#if !link}
  <p><em>Error: no link was found for this asset.</em></p>
{:else if !url}
  <p><em>Error: no URL was found for this asset.</em></p>
{:else if isImage}
  <Image
    src={url}
    sources={getSources}
    alt={link.description ?? "Unknown image"}
    width={link.width ?? undefined}
    height={link.height ?? undefined}
    sizeType={getContext(imageSizeTypeKey)}
    {blurhash}
  />
{:else}
  <p>
    <Link href={url}>{link.title}</Link><br />
    {#if link.description}
      <em>{link.description}</em>
    {/if}
  </p>
{/if}
