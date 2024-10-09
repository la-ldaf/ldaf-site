import { redirect } from "@sveltejs/kit";
import { VERCEL_ENV } from "$env/static/private";
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
  const isPreview = VERCEL_ENV === "preview";
  const speedInsightsEnabled = isProd || isPreview;

  const clientCurrentUser: User | undefined = currentUser
    ? { name: currentUser.name, email: currentUser.email, avatarURL: currentUser.avatarURL }
    : undefined;

  const { pageMetadataMap, pathsToIDs } = await loadPageMetadataMap({
    includeBreadcrumbs: true,
    includeRedirects: true,
    contentfulClient,
  });

  // As soon as we have the requisite data, determine if we need to redirect
  //   the user (whether internally or externally).
  const metadataID = pathsToIDs.get(pathname);
  if (metadataID) {
    // TODO: Since we have to look up the PageMetadataMapItem here, we can
    //       likely provide this object in the return and simplify the load
    //       functions on the other routes.
    const pageMetadata = pageMetadataMap.get(metadataID);
    if (pageMetadata) {
      const { internalRedirect, externalRedirect } = pageMetadata;
      if (internalRedirect) {
        // Since individual News and Events entries don't have corresponding
        //   Page Metadata entries, we need to check which type of internal
        //   redirect we're handling here.
        if (internalRedirect.__typename === "PageMetadata") {
          const internalRedirectPageMetadata = pageMetadataMap.get(internalRedirect.sys.id);
          if (internalRedirectPageMetadata?.url) {
            throw redirect(301, internalRedirectPageMetadata.url);
          }
        } else if (internalRedirect.__typename === "News" && internalRedirect.slug) {
          throw redirect(301, `/about/news/article/${internalRedirect.slug}`);
        } else if (
          internalRedirect.__typename === "EventEntry" &&
          internalRedirect.slug &&
          internalRedirect.eventDateAndTime
        ) {
          const date = new Date(internalRedirect.eventDateAndTime);
          throw redirect(
            301,
            `/about/events/event/${date.toISOString().split("T")[0]}-${internalRedirect.slug}`,
          );
        }
      }
      if (externalRedirect) {
        throw redirect(301, externalRedirect);
      }
    }
  }

  // Otherwise continue gathering data for the layout as normal.
  // Create a new map and remove all pages that have redirects so that they
  //   don't appear in navigation menus. We're creating a copy instead of
  //   modifying the original so that links outside of nav menus don't cause
  //   errors.
  const pageMetadataMapSansRedirects = new Map(
    [...pageMetadataMap].filter(([_, page]) => !page.internalRedirect && !page.externalRedirect),
  );
  const headerPrimaryNavItems = await loadMainNav({
    pageMetadataMap: pageMetadataMapSansRedirects,
    contentfulClient,
  });
  const footerNavItems = loadFooterNav({
    pageMetadataMap: pageMetadataMapSansRedirects,
    contentfulClient,
  });
  const sideNavMap = loadSideNavMap(pageMetadataMapSansRedirects, headerPrimaryNavItems);

  // Since any route can error, we always need to have the error page content
  //   available on every request.
  const errorPageContentMap = await loadErrorPageContent({ fetch, contentfulClient });

  depends("app:previewAuthenticationError");

  return {
    isProd,
    previewAuthenticationError,
    speedInsightsEnabled,
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
