export type AlgoliaMetadataRecord = {
  objectID: string;
  sys: { id: string };
  url?: string | null | undefined;
  children?: string[] | undefined | null;
  entryType?: string;
  parent?: {
    sys: {
      id: string;
      linkType?: string;
      type?: string;
    };
  } | null;
  // Unfortunately, we can't know what all of what will exist in the the `fields`
  // property from Contentful (especially once we're adding Service Entries),
  // so we have to allow for some dynamic flexibility here
  [key: string]: string | null | undefined | object | boolean;
};
