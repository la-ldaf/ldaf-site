<script lang="ts">
  import type { Document } from "@contentful/rich-text-types";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import { markdownDocument } from "$lib/components/ContentfulRichText/__tests__/documents";
  import { isDocument } from "$lib/components/ContentfulRichText/predicates";

  const document: Document = markdownDocument.document;
  if (!isDocument(document)) {
    throw new Error("default document provided is not a document");
  }
  const { content } = document;
</script>

<ContentfulRichText {content} />
