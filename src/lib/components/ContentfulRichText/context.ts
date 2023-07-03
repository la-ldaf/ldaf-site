import type { Links, LinksContext } from "./types";
export type { LinksContext };

export const linksKey = Symbol("contentfulRichTextLinks");

const getAssetLinksMap = (links: Links, key: "block" | "hyperlink") =>
  new Map(links.assets[key]?.map((link) => [link.sys.id, link]));

export const createLinksContext = (links: Links): LinksContext => ({
  links,
  linksMaps: {
    block: getAssetLinksMap(links, "block"),
    hyperlink: getAssetLinksMap(links, "hyperlink"),
  },
});
