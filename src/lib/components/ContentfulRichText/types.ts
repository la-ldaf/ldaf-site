import type { Asset } from "$lib/services/contentful/schema";

export const renderableBlockRequiredKeys = [
  "url",
  "contentType",
] as const satisfies readonly (keyof Asset)[];
export const renderableBlockOptionalKeys = [
  "title",
  "description",
  "width",
  "height",
] as const satisfies readonly (keyof Asset)[];

export type RenderableBlock = { sys: Pick<Asset["sys"], "id"> } & Pick<
  Asset,
  (typeof renderableBlockRequiredKeys)[number]
> &
  Partial<Pick<Asset, (typeof renderableBlockOptionalKeys)[number]>>;

export type RenderableHyperlink = RenderableBlock;

export type Links = {
  assets: {
    hyperlink?: (RenderableHyperlink | null)[];
    block?: (RenderableBlock | null)[];
  };
};

export type LinksMap<T extends RenderableBlock | RenderableHyperlink> = Map<string, T>;

export type LinksContext = {
  links: Links;
  linksAssetsMaps: {
    block: LinksMap<RenderableBlock>;
    hyperlink: LinksMap<RenderableHyperlink>;
  };
};
