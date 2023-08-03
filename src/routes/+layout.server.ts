import { loadPageMetadataMap } from "./loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadFooterNav } from "$lib/components/Footer/Footer.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";

export const load = async () => {
  const { pageMetadataMap, pathsToIDs } = await loadPageMetadataMap();
  const headerPrimaryNavItems = await loadMainNav(pageMetadataMap);
  const footerNavItems = await loadFooterNav(pageMetadataMap);
  const sideNavMap = await loadSideNavMap(pageMetadataMap, headerPrimaryNavItems);
  return {
    pageMetadataMap,
    pathsToIDs,
    siteTitle: loadSiteTitle(),
    headerPrimaryNavItems,
    headerSecondaryNavItems: loadSecondaryNav(),
    footerNavItems,
    sideNavMap,
  };
};
