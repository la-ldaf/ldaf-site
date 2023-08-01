<script lang="ts">
  import Node from "./Node.svelte";
  import type { Node as NodeType, EntryLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import { linksKey, type LinksContext } from "../context";
  export let node: NodeType;
  import { isEntryBlock } from "../predicates";
  import ContactCard from "$lib/components/ContactCard";

  let entry: EntryLinkBlock;
  if (!isEntryBlock(node)) {
    throw new Error("node is not an embedded entry block");
  }
  entry = node;
  // console.log("asset", JSON.stringify(assetHyperlink, null, 2));
  // console.log(`Asset text: ${assetHyperlink.content[0].value}`);
  const linksContext = getContext<LinksContext | undefined>(linksKey);
  // console.log("links context", linksContext?.links.entries.block);
  if (!linksContext) throw new Error("no context was provided for embedded entry block");
  const { id: entryId } = entry.data.target.sys;
  const entryBlock = linksContext.linksEntriesMaps.block.get(entryId);

  if (!entryBlock) throw new Error(`the entry ${entryId} was not found in the context`);
</script>

{#if entryBlock.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entryBlock]} />
{/if}
