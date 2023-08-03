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
  // console.log("NODE", JSON.stringify(node, null, 2));

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for entry hyperlink");
  const { id: entryId } = entryHyperlink.data.target.sys;

  // console.log("ID", entryId);
  const entry = linksContext.linksEntriesMaps.hyperlink.get(entryId);

  let entryMetadata;
  if (entry?.__typename === "PageMetadata") {
    entryMetadata = linksContext.pageMetadataMap.get(entryId);
    if (!entryMetadata)
      throw new Error(`the entry asset ${entryId} was not found in the pageMetadataMap`);
    // const { url } = entryMetadata;
  }
</script>

{#if entry?.__typename === "PageMetadata"}
  <a href={entryMetadata.url}
    >{#each entryHyperlink.content as subNode}<Node node={subNode} />{/each}</a
  >
{:else if entry?.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entry]} />
{/if}
