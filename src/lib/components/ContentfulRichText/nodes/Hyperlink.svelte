<script lang="ts">
  import type { Hyperlink } from "@contentful/rich-text-types";
  import Node from "./Node.svelte";
  export let node: Hyperlink;
</script>

<a href={node.data.uri}
  >{#each node.content as subNode}<Node node={subNode} />{/each}</a
>
