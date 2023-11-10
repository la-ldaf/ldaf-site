import { VERCEL_ENV, VERCEL_ANALYTICS_ID } from "$env/static/private";
import type { User } from "$lib/types";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadErrorPageContent } from "$lib/loadErrorPageContent";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadFooterNav } from "$lib/components/Footer/Footer.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";

export const load = async ({
  fetch,
  depends,
  locals: { contentfulClient, currentUser, previewAuthenticationError },
}) => {
  // prod indicator is sent with page data and is currently used to determine:
  //   * whether we should connect to Vercel Speed Insights
  //   * if we should set up GA in debug mode or prod mode
  const isProd = VERCEL_ENV === "production";
  const clientCurrentUser: User | undefined = currentUser
    ? { name: currentUser.name, email: currentUser.email, avatarURL: currentUser.avatarURL }
    : undefined;
  const pageMetadataMapPromise = loadPageMetadataMap({ contentfulClient });
  const headerPrimaryNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadMainNav({ pageMetadataMap, contentfulClient }),
  );
  const footerNavItemsPromise = pageMetadataMapPromise.then(({ pageMetadataMap }) =>
    loadFooterNav({ pageMetadataMap, contentfulClient }),
  );
  const sideNavMapPromise = Promise.all([
    pageMetadataMapPromise,
    headerPrimaryNavItemsPromise,
  ]).then(([{ pageMetadataMap }, navItems]) => loadSideNavMap(pageMetadataMap, navItems));
  const errorPageContentMap = await loadErrorPageContent({ fetch, contentfulClient });
  depends("app:previewAuthenticationError");
  return {
    isProd,
    previewAuthenticationError,
    // this env variable can't be renamed, so we send it with the page data
    analyticsID: isProd ? VERCEL_ANALYTICS_ID : undefined,
    pageMetadataMap: pageMetadataMapPromise.then(({ pageMetadataMap }) => pageMetadataMap),
    pathsToIDs: pageMetadataMapPromise.then(({ pathsToIDs }) => pathsToIDs),
    siteTitle: loadSiteTitle(),
    headerPrimaryNavItems: headerPrimaryNavItemsPromise,
    headerSecondaryNavItems: loadSecondaryNav(),
    footerNavItems: footerNavItemsPromise,
    sideNavMap: sideNavMapPromise,
    errorPageContentMap,
    currentUser: clientCurrentUser,
  };
};
