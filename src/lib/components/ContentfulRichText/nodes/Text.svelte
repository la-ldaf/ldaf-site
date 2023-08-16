<script lang="ts">
  import type { Text } from "@contentful/rich-text-types";
  import escape from "lodash/escape";

  type MarkType = "bold" | "code" | "italic" | "subscript" | "superscript" | "underline";

  export let node: Text;

  const wrapWith = (open: string, close: string) => (text: string) => `${open}${text}${close}`;

  const wrappers: Record<MarkType, (text: string) => string> = {
    bold: wrapWith("<strong>", "</strong>"),
    code: wrapWith("<code>", "</code>"),
    italic: wrapWith("<em>", "</em>"),
    subscript: wrapWith("<sub>", "</sub>"),
    superscript: wrapWith("<sup>", "</sup>"),
    underline: wrapWith("<u>", "</u>"),
  };

  const wrapped = node.marks.reduce(
    (text, { type }) => wrappers[type as MarkType](text),
    escape(node.value),
  );
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html wrapped}
