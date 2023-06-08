import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async (options) => {
  const {
    locals: { previewAuthenticationError, currentUser },
  } = options;
  return {
    previewAuthenticationError,
    siteTitle: loadSiteTitle(),
    secondaryNavItems: loadSecondaryNav(),
    navItems: await loadMainNav(options),
    currentUser,
  };
};
