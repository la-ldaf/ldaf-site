import { loadPageMetadataMap } from "./loadPageMetadataMap";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import { loadSideNavMap } from "$lib/components/SideNav/SideNav.server";
import type { Context } from "$lib/logger/private.server";

export const load = async (options) => {
  const {
    depends,
    locals: { previewAuthenticationError, contentfulClient, currentUser, logger },
  } = options;
  const siteTitlePromise = loadSiteTitle();
  const secondaryNavPromise = loadSecondaryNav();
  const pageMetadataMap = await loadPageMetadataMap({ contentfulClient, logger });
  const navItems = await loadMainNav({ pageMetadataMap, contentfulClient, logger });
  const sideNavMap = await loadSideNavMap(pageMetadataMap, navItems);
  depends("app:previewAuthenticationError");
  return {
    previewAuthenticationError,
    pageMetadataMap,
    siteTitle: await siteTitlePromise,
    navItems,
    sideNavMap,
    secondaryNavItems: secondaryNavPromise,
    currentUser,
    // This is the _only_ place we should make this type assertion to access the context outside of
    // the logger itself.
    loggerContext: (logger as unknown as { context?: Context })?.context?.PUBLIC ?? {},
  };
};
