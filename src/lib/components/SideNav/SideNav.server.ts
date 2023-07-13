import type { PageMetadataMap, PageMetadataMapItem } from "../../../routes/loadPageMetadataMap";
import type { NavMenuType } from "$lib/components/Header/Nav/types";
import type SideNavItem from "./types";

type SideNavMap = Map<string, SideNavItem>;

const sideNavMap: SideNavMap = new Map();

// recursive function that builds out a tree of children, grandchildren, etc.
const buildSideNavTree = (
  pageMetadataMap: PageMetadataMap,
  metadata: PageMetadataMapItem
): SideNavItem[] => {
  const tree: SideNavItem[] = [];
  if (metadata.children) {
    metadata.children.forEach((childId) => {
      const child = pageMetadataMap.get(childId);
      if (child && child.sys && child.title && child.url) {
        tree.push({
          id: child.sys.id,
          title: child.title,
          link: child.url,
          children: buildSideNavTree(pageMetadataMap, child),
        });
      }
    });
  }
  return tree.sort(({ title: a }, { title: b }) => a.localeCompare(b));
};

export const loadSideNavMap = async (
  pageMetadataMap: PageMetadataMap,
  mainMenu: NavMenuType[]
): Promise<SideNavMap> => {
  // construct the full side navs for each top tier
  mainMenu.forEach((topTier) => {
    const metadata = pageMetadataMap.get(topTier.id);
    if (metadata && metadata.slug && metadata.sys && metadata.title && metadata.url) {
      sideNavMap.set(metadata.slug, {
        id: metadata.sys.id,
        title: metadata.title,
        link: metadata.url,
        children: buildSideNavTree(pageMetadataMap, metadata),
      });
    }
  });
  return sideNavMap;
};
