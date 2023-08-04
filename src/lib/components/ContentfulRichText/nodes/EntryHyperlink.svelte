<script lang="ts">
  import type { Node as NodeType, EntryHyperlink } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { getContext } from "svelte";
  import { linksKey, type LinksContext } from "../context";
  import { isEntryHyperlink } from "../predicates";
  import ContactCard from "$lib/components/ContactCard";

  export let node: NodeType;
  if (!isEntryHyperlink(node)) {
    throw new Error("node is not an entry hyperlink");
  }
  let entryHyperlink: EntryHyperlink = node;

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for entry hyperlink");
  const { id: entryID } = entryHyperlink.data.target.sys;

  const entry = linksContext.linksEntriesMaps.hyperlink.get(entryID);

  const entryMetadata =
    entry?.__typename === "PageMetadata" && linksContext.pageMetadataMap.get(entryID);
  if (!entryMetadata) {
    throw new Error(`the entry asset ${entryID} was not found in the pageMetadataMap`);
  }
</script>

{#if entry?.__typename === "PageMetadata"}
  <a href={entryMetadata.url}
    >{#each entryHyperlink.content as subNode}<Node node={subNode} />{/each}</a
  >
{:else if entry?.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entry]} />
{:else}
  <p>Entry hyperlink of type {entry?.__typename} not supported</p>
{/if}
