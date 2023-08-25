import { VERCEL_ENV, VERCEL_ANALYTICS_ID } from "$env/static/private";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadFooterNav } from "$lib/components/Footer/Footer.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";

export const load = async () => {
  const pageMetadataMapPromise = loadPageMetadataMap();
  const headerPrimaryNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadMainNav(pageMetadataMap),
  );
  const footerNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadFooterNav(pageMetadataMap),
  );
  const sideNavMapPromise = Promise.all([
    pageMetadataMapPromise,
    headerPrimaryNavItemsPromise,
  ]).then(([{ pageMetadataMap }, navItems]) => loadSideNavMap(pageMetadataMap, navItems));
  return {
    // this env variable can't be renamed, so we send it with the page data
    analyticsID: VERCEL_ENV === "production" ? VERCEL_ANALYTICS_ID : undefined,
    pageMetadataMap: pageMetadataMapPromise.then(({ pageMetadataMap }) => pageMetadataMap),
    pathsToIDs: pageMetadataMapPromise.then(({ pathsToIDs }) => pathsToIDs),
    siteTitle: loadSiteTitle(),
    headerPrimaryNavItems: headerPrimaryNavItemsPromise,
    headerSecondaryNavItems: loadSecondaryNav(),
    footerNavItems: footerNavItemsPromise,
    sideNavMap: sideNavMapPromise,
  };
};
