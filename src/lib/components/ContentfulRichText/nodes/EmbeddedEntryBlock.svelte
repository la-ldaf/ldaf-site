<script lang="ts">
  import type { Node as NodeType, EntryLinkBlock } from "@contentful/rich-text-types";
  import { getContext } from "svelte";
  import { linksKey, type LinksContext } from "../context";
  export let node: NodeType;
  import { isEntryBlock } from "../predicates";
  import ContactCard from "$lib/components/ContactCard";
  import Error from "../../../../routes/+error.svelte";

  let entry: EntryLinkBlock;
  if (!isEntryBlock(node)) {
    throw new Error("Node is not of type 'embedded-entry-block'");
  }
  entry = node;

  const linksContext = getContext<LinksContext | undefined>(linksKey);
  if (!linksContext) throw new Error("no context was provided for embedded entry block");

  const { id: entryId } = entry.data.target.sys;
  const entryBlock = linksContext.linksEntriesMaps.block.get(entryId);
  if (!entryBlock) throw new Error(`the entry ${entryId} was not found in the context`);

  /*
   * TODO: Add support for the other types of entries that can be an "embedded-entry-block":
   *    - Image wrapper
   *    - Video Wrapper
   *    - Location
   */
  if (entryBlock.__typename !== "Contact") {
    throw new Error(`Entry block of type ${entryBlock.__typename} is not supported.`);
  }
</script>

{#if entryBlock.__typename === "Contact"}
  <ContactCard address={undefined} contacts={[entryBlock]} />
{/if}