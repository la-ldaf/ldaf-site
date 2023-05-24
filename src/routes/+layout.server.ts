import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async (options) => {
  const {
    depends,
    locals: { previewAuthenticationError, currentUser },
  } = options;
  depends("app:previewAuthenticationError");
  return {
    previewAuthenticationError,
    siteTitle: loadSiteTitle(),
    secondaryNavItems: loadSecondaryNav(),
    navItems: await loadMainNav(options),
    currentUser,
  };
};
