import type { EntryFieldTypes } from "contentful";

export type TestRichTextEntrySkeleton = {
  contentTypeId: "testRichText";
  fields: { title: EntryFieldTypes.Text; body: EntryFieldTypes.RichText };
};
