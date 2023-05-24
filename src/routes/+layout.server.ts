import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadFooterNav } from "$lib/components/Footer/Footer.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";
import type { Context } from "$lib/logger/private.server";

export const load = async (options) => {
  const {
    depends,
    locals: { previewAuthenticationError, contentfulClient, currentUser, logger },
  } = options;
  const pageMetadataMapPromise = loadPageMetadataMap({
    contentfulClient,
    logger,
    includeBreadcrumbs: true,
  });
  const headerPrimaryNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadMainNav({ pageMetadataMap, contentfulClient, logger })
  );
  const footerNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadFooterNav({ pageMetadataMap, contentfulClient })
  );
  const sideNavMapPromise = Promise.all([
    pageMetadataMapPromise,
    headerPrimaryNavItemsPromise,
  ]).then(([{ pageMetadataMap }, navItems]) => loadSideNavMap(pageMetadataMap, navItems));
  depends("app:previewAuthenticationError");
  return {
    previewAuthenticationError,
    pageMetadataMap: pageMetadataMapPromise.then(({ pageMetadataMap }) => pageMetadataMap),
    pathsToIDs: pageMetadataMapPromise.then(({ pathsToIDs }) => pathsToIDs),
    siteTitle: loadSiteTitle(),
    headerPrimaryNavItems: headerPrimaryNavItemsPromise,
    headerSecondaryNavItems: loadSecondaryNav(),
    footerNavItems: footerNavItemsPromise,
    sideNavMap: sideNavMapPromise,
    currentUser,
    loggerContext: (logger as unknown as { context?: Context })?.context?.PUBLIC ?? {},
  };
};
