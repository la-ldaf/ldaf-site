<script lang="ts">
  import type { Node as NodeType, Hr } from "@contentful/rich-text-types";
  import { isHr } from "../predicates";

  export let node: NodeType;

  let hr: Hr;
  if (!isHr(node)) {
    throw new Error("node is not an hr");
  }
  hr = node;
</script>

<hr />
