import type { PageMetadataMap, MetadataMapItem } from "$lib/loadPageMetadataMap";
import type { NavMenuType } from "$lib/components/Header/Nav/types";
import type SideNavItem from "./types";

type SideNavMap = Map<string, SideNavItem>;

const sideNavMap: SideNavMap = new Map();

// recursive function that builds out a tree of children, grandchildren, etc.
const buildSideNavTree = (
  pageMetadataMap: PageMetadataMap,
  featuredPages: string[],
  children: MetadataMapItem["children"],
): SideNavItem[] => {
  const tree: SideNavItem[] = [];
  if (children) {
    featuredPages.forEach((featuredPageId) => {
      const matchedChildId = children.find((childId) => childId === featuredPageId);
      if (matchedChildId) {
        const child = pageMetadataMap.get(matchedChildId);
        if (child && child.sys && child.title && child.url) {
          // push the child to the tree and build out its children
          tree.push({
            id: child.sys.id,
            title: child.title,
            link: child.url,
            children: buildSideNavTree(pageMetadataMap, featuredPages, child.children),
          });
        }
      }
    });
    // then add the rest in alphabetical order
    const nonFeaturedPages: SideNavItem[] = [];
    children.forEach((childId) => {
      // skip if we've already added it
      const childAlreadyInTree = tree.find((leaf) => leaf.id === childId);
      if (!childAlreadyInTree) {
        const child = pageMetadataMap.get(childId);
        if (child && child.sys && child.title && child.url) {
          nonFeaturedPages.push({
            id: child.sys.id,
            title: child.title,
            link: child.url,
            children: buildSideNavTree(pageMetadataMap, featuredPages, child.children),
          });
        }
      }
    });
    nonFeaturedPages.sort(({ title: a }, { title: b }) => a.localeCompare(b));
    tree.push(...nonFeaturedPages);
  }
  return tree;
};

export const loadSideNavMap = async (
  pageMetadataMap: PageMetadataMap,
  mainMenu: NavMenuType[],
): Promise<SideNavMap> => {
  // construct the full side navs for each top tier utilizing work done in the main menu
  mainMenu.forEach((topTier) => {
    const metadata = pageMetadataMap.get(topTier.id);
    if (
      metadata &&
      metadata.slug &&
      metadata.sys &&
      metadata.title &&
      metadata.url &&
      topTier.children
    ) {
      // utilize the sort order from the main menu
      const featuredPages = topTier.children.map((menuItem) => menuItem.id);
      // remove the first item since it's always the top tier page
      featuredPages.splice(0, 1);
      sideNavMap.set(metadata.slug, {
        id: metadata.sys.id,
        title: metadata.title,
        link: metadata.url,
        children: buildSideNavTree(pageMetadataMap, featuredPages, metadata.children),
      });
    }
  });
  return sideNavMap;
};
