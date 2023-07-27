<script lang="ts">
  import type { Node as NodeType, EntryHyperlink } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { getContext } from "svelte";
  import { linksKey, type LinksContext } from "../context";
  import { isEntryHyperlink } from "../predicates";

  export let node: NodeType;
  if (!isEntryHyperlink(node)) {
    throw new Error("node is not an entry hyperlink");
  }

  let entryHyperlink: EntryHyperlink = node;

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for asset hyperlink");
  const { id: entryId } = entryHyperlink.data.target.sys;
  const entryMetadata = linksContext.pageMetadataMap.get(entryId);
  if (!entryMetadata)
    throw new Error(`the entry asset ${entryId} was not found in the pageMetadataMap`);
  const { url } = entryMetadata;
</script>

<a href={url}
  >{#each entryHyperlink.content as subNode}<Node node={subNode} />{/each}</a
>
