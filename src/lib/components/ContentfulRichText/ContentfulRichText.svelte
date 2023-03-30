<script lang="ts">
  import type { Document as DocumentType } from "@contentful/rich-text-types";
  import Document from "./nodes/Document.svelte";

  export let document: DocumentType;
</script>

<Document node={document} />
