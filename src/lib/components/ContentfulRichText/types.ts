import type { Asset, Entry, ImageWrapper, Contact } from "$lib/services/server/contentful/schema";
import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

type AssetWithMaybeBlurhash = Asset & {
  blurhash?: string | null | undefined;
};

export const renderableAssetBlockRequiredKeys = [
  "url",
  "contentType",
] as const satisfies readonly (keyof AssetWithMaybeBlurhash)[];

type RenderableAssetBlockRequiredKey = (typeof renderableAssetBlockRequiredKeys)[number];

export const renderableAssetBlockOptionalKeys = [
  "title",
  "description",
  "width",
  "height",
  "blurhash",
] as const satisfies readonly (keyof AssetWithMaybeBlurhash)[];

type RenderableAssetBlockOptionalKey = (typeof renderableAssetBlockOptionalKeys)[number];

export const renderableEntryBlockImageWrapperKeys = [
  "internalTitle",
  "altText",
  "linkedImage",
] as const satisfies readonly (keyof ImageWrapper)[];

type RenderableEntryBlockImageWrapperKey = (typeof renderableEntryBlockImageWrapperKeys)[number];

export const renderableEntryBlockContactKeys = [
  "entityName",
  "phoneExt",
  "email",
] as const satisfies readonly (keyof Contact)[];

type RenderableEntryBlockContactKey = (typeof renderableEntryBlockContactKeys)[number];

export type RenderableAssetBlock = { sys: Pick<AssetWithMaybeBlurhash["sys"], "id"> } & Pick<
  AssetWithMaybeBlurhash,
  RenderableAssetBlockRequiredKey
> &
  Partial<Pick<AssetWithMaybeBlurhash, RenderableAssetBlockOptionalKey>>;

type RenderableImageWrapper = Pick<
  ImageWrapper,
  Exclude<RenderableEntryBlockImageWrapperKey, "linkedImage">
> & {
  linkedImage?: RenderableAssetBlock | null | undefined;
};

export type RenderableEntryBlock = { sys: Pick<Entry["sys"], "id">; __typename: string } & Partial<
  Pick<RenderableImageWrapper, RenderableEntryBlockImageWrapperKey> &
    Pick<Contact, RenderableEntryBlockContactKey>
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
