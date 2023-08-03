<script lang="ts">
  import Node from "./Node.svelte";
  import type { Node as NodeType, AssetHyperlink } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import Link from "$lib/components/Link/Link.svelte";
  import { linksKey, type LinksContext } from "../context";
  export let node: NodeType;
  import { isAssetHyperlink } from "../predicates";

  let assetHyperlink: AssetHyperlink;
  if (!isAssetHyperlink(node)) {
    throw new Error("node is not an asset hyperlink");
  }
  assetHyperlink = node;
  // console.log("node", JSON.stringify(node, null, 2));
  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for asset hyperlink");

  const { id: assetID } = assetHyperlink.data.target.sys;
  const link = linksContext.linksAssetsMaps.hyperlink.get(assetID);
  if (!link) throw new Error(`the asset ${assetID} was not found in the context`);

  const { url } = link;
  if (!url) {
    throw new Error(`the asset ${assetID} was found in the context but did not have a source URL`);
  }
</script>

<Link href={url}
  >{#each assetHyperlink.content as subNode}<Node node={subNode} />{/each}</Link
>
