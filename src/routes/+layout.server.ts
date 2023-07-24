import { loadPageMetadataMap } from "./loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";

export const load = async () => {
  const pageMetadataMap = await loadPageMetadataMap();
  const navItems = await loadMainNav(pageMetadataMap);
  const sideNavMap = await loadSideNavMap(pageMetadataMap, navItems);
  return {
    pageMetadataMap,
    siteTitle: loadSiteTitle(),
    navItems,
    secondaryNavItems: loadSecondaryNav(),
    sideNavMap,
  };
};
