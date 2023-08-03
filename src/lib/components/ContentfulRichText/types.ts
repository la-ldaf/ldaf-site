import type { Asset, Entry, ImageWrapper, Contact } from "$lib/services/contentful/schema";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

type AssetWithMaybeBlurhash = Asset & {
  blurhash?: string | null | undefined;
};

export const renderableAssetBlockRequiredKeys = [
  "url",
  "contentType",
] as const satisfies readonly (keyof AssetWithMaybeBlurhash)[];

export const renderableAssetBlockOptionalKeys = [
  "title",
  "description",
  "width",
  "height",
  "blurhash",
] as const satisfies readonly (keyof AssetWithMaybeBlurhash)[];

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
  AssetWithMaybeBlurhash,
  (typeof renderableAssetBlockRequiredKeys)[number]
> &
  Partial<Pick<AssetWithMaybeBlurhash, (typeof renderableAssetBlockOptionalKeys)[number]>>;

type RenderableImageWrapper = Pick<
  ImageWrapper,
  (typeof renderableEntryBlockImageWrapperKeys)[number]
> & {
  linkedImage?: RenderableAssetBlock | null | undefined;
};

export type RenderableEntryBlock = { sys: Pick<Entry["sys"], "id">; __typename: string } & Partial<
  Pick<RenderableImageWrapper, (typeof renderableEntryBlockImageWrapperKeys)[number]> &
    Pick<Contact, (typeof renderableEntryBlockContactKeys)[number]>
>;

export type RenderableAssetHyperlink = RenderableAssetBlock;
export type RenderableEntryHyperlink = RenderableEntryBlock;

export type Links = {
  assets: {
    block?: (RenderableAssetBlock | null)[];
    hyperlink?: (RenderableAssetHyperlink | null)[];
  };
  entries: {
    block?: (RenderableEntryBlock | null)[];
    hyperlink?: (RenderableEntryHyperlink | null)[];
  };
};

export type LinksMap<
  T extends
    | RenderableAssetBlock
    | RenderableAssetHyperlink
    | RenderableEntryBlock
    | RenderableEntryHyperlink
> = Map<string, T>;

export type LinksContext = {
  pageMetadataMap: PageMetadataMap;
  links: Links;
  linksAssetsMaps: {
    block: LinksMap<RenderableAssetBlock>;
    hyperlink: LinksMap<RenderableAssetHyperlink>;
  };
  linksEntriesMaps: {
    block: LinksMap<RenderableEntryBlock>;
    hyperlink: LinksMap<RenderableEntryHyperlink>;
  };
};
