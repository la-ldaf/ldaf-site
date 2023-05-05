<script lang="ts">
  import type { Node as NodeType } from "@contentful/rich-text-types";
  import { getAssertedHeadingLevel } from "../headings";
  import Node from "./Node.svelte";

  export let node: NodeType;

  const heading = getAssertedHeadingLevel(5, node);
</script>

<h5>
  {#each heading.content as subNode}
    <Node node={subNode} />
  {/each}
</h5>
