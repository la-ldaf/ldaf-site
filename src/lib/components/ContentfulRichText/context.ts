import type { Links, LinksContext } from "./types";
export type { LinksContext };
import type { PageMetadataMap } from "../../../routes/loadPageMetadataMap";

export const linksKey = Symbol("contentfulRichTextLinks");

const getAssetLinksMap = (links: Links, key: "block" | "hyperlink") =>
  new Map(links.assets[key]?.flatMap((link) => (link ? [[link?.sys?.id, link]] : [])));

const getAssetEntriesMap = (links: Links, key: "block" | "hyperlink") => {
  return new Map(links.entries?.[key]?.flatMap((link) => (link ? [[link?.sys?.id, link]] : [])));
};

export const createLinksContext = (
  links: Links,
  pageMetadataMap: PageMetadataMap
): LinksContext => {
  return {
    pageMetadataMap,
    links: {
      assets: {
        block: links.assets?.block?.filter(Boolean),
        hyperlink: links.assets?.hyperlink?.filter(Boolean),
      },
      entries: {
        block: links.entries?.block?.filter(Boolean),
        hyperlink: links.entries?.hyperlink?.filter(Boolean),
      },
    },
    linksAssetsMaps: {
      block: getAssetLinksMap(links, "block"),
      hyperlink: getAssetLinksMap(links, "hyperlink"),
    },
    linksEntriesMaps: {
      block: getAssetEntriesMap(links, "block"),
      hyperlink: getAssetEntriesMap(links, "hyperlink"),
    },
  };
};

export const blurhashesKey = Symbol("blurhashes");

export const imageSizeTypeKey = Symbol("sizeType");
