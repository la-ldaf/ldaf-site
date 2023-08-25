<script lang="ts">
  import type { Node, Text } from "@contentful/rich-text-types";
  import escape from "lodash/escape";
  import { isText } from "../predicates";

  type MarkType = "bold" | "code" | "italic" | "subscript" | "superscript" | "underline";

  export let node: Node;

  let textNode: Text;
  if (!isText(node)) {
    throw new Error("node is not text");
  }
  textNode = node;

  const wrapWith = (open: string, close: string) => (text: string) => `${open}${text}${close}`;

  const wrappers: Record<MarkType, (text: string) => string> = {
    bold: wrapWith("<strong>", "</strong>"),
    code: wrapWith("<code>", "</code>"),
    italic: wrapWith("<em>", "</em>"),
    subscript: wrapWith("<sub>", "</sub>"),
    superscript: wrapWith("<sup>", "</sup>"),
    underline: wrapWith("<u>", "</u>"),
  };

  const wrapped = textNode.marks.reduce(
    (text, { type }) => wrappers[type as MarkType](text),
    escape(textNode.value),
  );
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html wrapped}
