<script lang="ts">
  import type { Node as NodeType } from "@contentful/rich-text-types";
  import { getAssertedHeadingLevel } from "../headings";
  import Node from "./Node.svelte";

  export let node: NodeType;

  const heading = getAssertedHeadingLevel(3, node);
</script>

<h3>
  {#each heading.content as subNode}
    <Node node={subNode} />
  {/each}
</h3>
