<script lang="ts">
  import type { Node as NodeType, AssetLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import { isAssetBlock } from "../predicates";
  import Image from "$lib/components/Image/Image.svelte";
  import { linksKey, blurhashesKey, type LinksContext } from "../context";
  import { getSources } from "$lib/imageServices/contentful";

  export let node: NodeType;

  let asset: AssetLinkBlock;
  if (!isAssetBlock(node)) throw new Error("node is not an embedded asset");
  asset = node;

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for embedded asset node");
  const assetID = asset.data.target.sys.id;
  const link = linksContext.linksAssetsMaps.block.get(assetID);
  if (!link) throw new Error(`the asset ${assetID} was not found in the context`);
  const { url } = link;
  if (!url)
    throw new Error(`the asset ${assetID} was found in the context but did not have a source URL`);

  const blurhashes = getContext<Record<string, string> | undefined>(blurhashesKey);
  const blurhash = blurhashes?.[assetID];
</script>

<Image
  src={url}
  sources={getSources(url)}
  alt={link.description ?? "Unknown image"}
  width={link.width ?? undefined}
  height={link.height ?? undefined}
  {blurhash}
/>
