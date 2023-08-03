import type { Asset, Entry, ImageWrapper, Contact } from "$lib/services/contentful/schema";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

export const renderableAssetBlockRequiredKeys = [
  "url",
  "contentType",
] as const satisfies readonly (keyof Asset)[];
export const renderableAssetBlockOptionalKeys = [
  "title",
  "description",
  "width",
  "height",
] as const satisfies readonly (keyof Asset)[];
export const renderableEntryBlockImageWrapperKeys = [
  "internalTitle",
  "altText",
  "linkedImage",
  "imageCategory",
] as const satisfies readonly (keyof ImageWrapper)[];
export const renderableEntryBlockContactKeys = [
  "entityName",
  "phoneExt",
  "email",
] as const satisfies readonly (keyof Contact)[];

export type RenderableAssetBlock = { sys: Pick<Asset["sys"], "id"> } & Pick<
  Asset,
  (typeof renderableAssetBlockRequiredKeys)[number]
> &
  Partial<Pick<Asset, (typeof renderableAssetBlockOptionalKeys)[number]>>;

export type RenderableEntryBlock = { sys: Pick<Entry["sys"], "id">; __typename: string } & Partial<
  Pick<ImageWrapper, (typeof renderableEntryBlockImageWrapperKeys)[number]>
> &
  Partial<Pick<Contact, (typeof renderableEntryBlockContactKeys)[number]>>;

export type RenderableHyperlink = RenderableAssetBlock;

export type Links = {
  assets: {
    block?: (RenderableAssetBlock | null)[];
    hyperlink?: (RenderableHyperlink | null)[];
  };
  entries: {
    block?: (RenderableEntryBlock | null)[];
    hyperlink?: (RenderableHyperlink | null)[];
  };
};

export type LinksMap<T extends RenderableAssetBlock | RenderableEntryBlock | RenderableHyperlink> =
  Map<string, T>;

export type LinksContext = {
  pageMetadataMap: PageMetadataMap;
  links: Links;
  linksAssetsMaps: {
    block: LinksMap<RenderableAssetBlock>;
    hyperlink: LinksMap<RenderableHyperlink>;
  };
  linksEntriesMaps: {
    block: LinksMap<RenderableEntryBlock>;
    hyperlink: LinksMap<RenderableHyperlink>;
  };
};
