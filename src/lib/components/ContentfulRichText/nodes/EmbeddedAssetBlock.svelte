<script lang="ts">
  import type { Node as NodeType, AssetLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import { isAssetBlock } from "../predicates";
  import Image from "$lib/components/Image/Image.svelte";
  import { linksKey, type LinksContext } from "../context";
  import { getSources } from "$lib/imageServices/contentful";

  export let node: NodeType;

  let asset: AssetLinkBlock;
  if (!isAssetBlock(node)) throw new Error("node is not an embedded asset");
  asset = node;

  const context = getContext<LinksContext>(linksKey);
  if (!context) throw new Error("no context was provided for embedded asset node");
  const assetID = asset.data.target.sys.id;
  const link = context.linksMaps.block.get(assetID);
  if (!link) throw new Error(`the asset ${assetID} was not found in the context`);
  const { url } = link;
  if (!url) throw new Error(`the asset ${assetID} was found but did not have a source URL`);
</script>

<Image
  src={url}
  sources={getSources(url)}
  alt={link.description ?? "Unknown image"}
  width={link.width ?? undefined}
  height={link.height ?? undefined}
/>
