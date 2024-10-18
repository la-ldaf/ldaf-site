<script lang="ts">
  import type { Node as NodeType, EntryHyperlink } from "@contentful/rich-text-types";
  import type { MetadataMapItem } from "$lib/types";
  import Node from "./Node.svelte";
  import { getContext } from "svelte";
  import { linksKey, type LinksContext } from "../context";
  import { isEntryHyperlink } from "../predicates";
  import Link from "$lib/components/Link";
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

  let entryMetadata: MetadataMapItem;
  if (entry?.__typename === "PageMetadata") {
    linksContext.pageMetadataMap.get(entryID);
    const meta = linksContext.pageMetadataMap.get(entryID);
    if (!meta) {
      throw new Error(`the entry asset ${entryID} was not found in the pageMetadataMap`);
    }
    entryMetadata = meta;
  }
</script>

{#if entry?.__typename === "PageMetadata"}
  <Link href={entryMetadata?.url}
    >{#each entryHyperlink.content as subNode}<Node node={subNode} />{/each}
  </Link>
{:else if entry?.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entry]} />
{:else}
  <p>Entry hyperlink of type {entry?.__typename} not supported</p>
{/if}
