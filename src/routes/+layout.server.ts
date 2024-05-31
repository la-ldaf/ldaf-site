import { redirect } from "@sveltejs/kit";
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
  url: { pathname },
}) => {
  // prod indicator is sent with page data and is currently used to determine:
  //   * whether we should connect to Vercel Speed Insights
  //   * if we should set up GA in debug mode or prod mode
  const isProd = VERCEL_ENV === "production";

  const clientCurrentUser: User | undefined = currentUser
    ? { name: currentUser.name, email: currentUser.email, avatarURL: currentUser.avatarURL }
    : undefined;

  const { pageMetadataMap, pathsToIDs } = await loadPageMetadataMap({ contentfulClient });

  // As soon as we have the requisite data, determine if we need to redirect
  //   the user (whether internally or externally).
  const metadataID = pathsToIDs.get(pathname);
  if (metadataID) {
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (pageMetadata) {
      if (pageMetadata.internalRedirect) {
        const internalRedirectPageMetadata = pageMetadataMap.get(
          pageMetadata.internalRedirect.sys.id,
        );
        if (internalRedirectPageMetadata?.url) {
          throw redirect(301, internalRedirectPageMetadata.url);
        }
      }
      if (pageMetadata.externalRedirect) {
        throw redirect(301, pageMetadata.externalRedirect);
      }
    }
  }

  // Otherwise continue gathering data for the layout as normal.
  const headerPrimaryNavItems = await loadMainNav({ pageMetadataMap, contentfulClient });
  const footerNavItems = loadFooterNav({ pageMetadataMap, contentfulClient });
  const sideNavMap = loadSideNavMap(pageMetadataMap, headerPrimaryNavItems);
  const errorPageContentMap = await loadErrorPageContent({ fetch, contentfulClient });

  depends("app:previewAuthenticationError");

  return {
    isProd,
    previewAuthenticationError,
    // this env variable can't be renamed, so we send it with the page data
    analyticsID: isProd ? VERCEL_ANALYTICS_ID : undefined,
    pageMetadataMap: pageMetadataMap,
    pathsToIDs: pathsToIDs,
    siteTitle: loadSiteTitle(),
    headerPrimaryNavItems: headerPrimaryNavItems,
    headerSecondaryNavItems: loadSecondaryNav(),
    footerNavItems: footerNavItems,
    sideNavMap: sideNavMap,
    errorPageContentMap,
    currentUser: clientCurrentUser,
  };
};
