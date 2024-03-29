<script lang="ts">
  import type { Node as NodeType, AssetLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import { isAssetBlock } from "../predicates";
  import { linksKey, blurhashesKey, type LinksContext, imageSizeTypeKey } from "../context";
  import { getSources } from "$lib/imageServices/contentful";
  import Image from "$lib/components/Image";
  import Link from "$lib/components/Link";

  export let node: NodeType;

  if (!isAssetBlock(node)) throw new Error("node is not an embedded asset");
  let asset: AssetLinkBlock = node;

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for embedded asset node");
  const assetID = asset.data.target.sys.id;

  const link = linksContext.linksAssetsMaps.block.get(assetID);
  if (!link) throw new Error(`the asset ${assetID} was not found in the context`);
  const { url } = link;
  if (!url) {
    throw new Error(`the asset ${assetID} was found in the context but did not have a source URL`);
  }

  const isImage = link.contentType?.startsWith("image/");

  const blurhashes = getContext<Record<string, string> | null | undefined>(blurhashesKey);
  const blurhash = blurhashes?.[assetID];
</script>

{#if isImage}
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
