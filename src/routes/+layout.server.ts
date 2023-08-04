import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";

export const load = async () => {
  const pageMetadataMapPromise = loadPageMetadataMap();
  const navItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadMainNav(pageMetadataMap)
  );
  const sideNavMapPromise = Promise.all([pageMetadataMapPromise, navItemsPromise]).then(
    ([{ pageMetadataMap }, navItems]) => loadSideNavMap(pageMetadataMap, navItems)
  );
  return {
    pageMetadataMap: pageMetadataMapPromise.then(({ pageMetadataMap }) => pageMetadataMap),
    pathsToIDs: pageMetadataMapPromise.then(({ pathsToIDs }) => pathsToIDs),
    siteTitle: loadSiteTitle(),
    navItems: navItemsPromise,
    secondaryNavItems: loadSecondaryNav(),
    sideNavMap: sideNavMapPromise,
  };
};
