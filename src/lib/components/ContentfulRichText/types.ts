import type { Asset } from "$lib/services/contentful/schema";

export const renderableBlockRequiredKeys = ["url"] as const satisfies readonly (keyof Asset)[];
export const renderableBlockOptionalKeys = [
  "contentType",
  "title",
  "description",
  "width",
  "height",
] as const satisfies readonly (keyof Asset)[];

export type RenderableBlock = { sys: Pick<Asset["sys"], "id"> } & Pick<Asset, "url"> &
  Partial<Pick<Asset, "contentType" | "title" | "description" | "width" | "height">>;

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
