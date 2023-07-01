import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";
import type { Context } from "$lib/logger/private.server";

export const load = async (options) => {
  const {
    depends,
    locals: { previewAuthenticationError, currentUser, logger },
  } = options;
  depends("app:previewAuthenticationError");
  return {
    previewAuthenticationError,
    siteTitle: loadSiteTitle(),
    secondaryNavItems: loadSecondaryNav(),
    navItems: await loadMainNav(options),
    currentUser,
    // This is the _only_ place we should make this type assertion to access the context outside of
    // the logger itself.
    loggerContext: (logger as unknown as { context?: Context })?.context?.PUBLIC ?? {},
  };
};
