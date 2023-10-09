<script lang="ts">
  import Link from "$lib/components/Link";
  import type { Node as NodeType, Hyperlink } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  import { isHyperlink } from "../predicates";

  export let node: NodeType;

  let hyperlink: Hyperlink;
  if (!isHyperlink(node)) {
    throw new Error("node is not a hyperlink");
  }
  hyperlink = node;
</script>

<Link href={hyperlink.data.uri}
  >{#each hyperlink.content as subNode}<Node node={subNode} />{/each}</Link
>
