// Shared types across API endpoints

export type SearchIndexServiceEntry = {
  objectID: string | null | undefined;
  url: string | null | undefined;
  metaTitle: string | null | undefined;
  metaDescription: string | null | undefined;
  entryType: string;
};
