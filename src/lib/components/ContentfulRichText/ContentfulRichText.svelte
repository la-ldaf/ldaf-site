<script lang="ts">
  import { type Document, BLOCKS, MARKS } from "@contentful/rich-text-types";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import Node from "./Node.svelte";

  const document: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH, // Can be paragraphs, images, lists, embedded entries
        data: {},
        content: [
          {
            nodeType: "text",
            value: "This text is ",
            data: {},
            marks: [],
          },
          {
            nodeType: "text",
            value: "important",
            data: {},
            marks: [{ type: "bold" }],
          },
        ],
      },
    ],
  };
</script>

<Node node={document} />
