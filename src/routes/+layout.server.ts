import { loadPageMetadataMap } from "./loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async () => {
  const pageMetadataMap = await loadPageMetadataMap();
  return {
    pageMetadataMap,
    siteTitle: loadSiteTitle(),
    navItems: loadMainNav(pageMetadataMap),
    secondaryNavItems: loadSecondaryNav(),
  };
};
