import type { Links, LinksContext } from "./types";
export type { LinksContext };

export const linksKey = Symbol("contentfulRichTextLinks");

const getAssetLinksMap = (links: Links, key: "block" | "hyperlink") =>
  new Map(links.assets[key]?.flatMap((link) => (link ? [[link.sys.id, link]] : [])));

export const createLinksContext = (links: Links, pageMetadataMap): LinksContext => ({
  pageMetadataMap,
  links: {
    assets: {
      block: links.assets.block?.filter(Boolean),
      hyperlink: links.assets.hyperlink?.filter(Boolean),
    },
  },
  linksAssetsMaps: {
    block: getAssetLinksMap(links, "block"),
    hyperlink: getAssetLinksMap(links, "hyperlink"),
  },
});

export const blurhashesKey = Symbol("blurhashes");

export const imageSizeTypeKey = Symbol("sizeType");
