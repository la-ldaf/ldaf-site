<script lang="ts">
  import Node from "./Node.svelte";
  import type { AssetHyperlink } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import Link from "$lib/components/Link/Link.svelte";
  import { linksKey, type LinksContext } from "../context";

  export let node: AssetHyperlink;

  const linksContext = getContext<LinksContext | undefined>(linksKey);

  $: ({ id } = node.data.target.sys);
  $: link = linksContext?.linksAssetsMaps.hyperlink.get(id);
  $: ({ url } = link ?? { url: undefined });
</script>

{#if !url}
  <em>No URL was found for this link.</em>
{:else}
  <Link href={url}
    >{#each node.content as subNode}<Node node={subNode} />{/each}</Link
  >
{/if}
