import { error } from "@sveltejs/kit";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async (options) => {
  const {
    locals: { previewAuthenticationError },
  } = options;
  return {
    previewAuthenticationError,
    siteTitle: loadSiteTitle(),
    secondaryNavItems: loadSecondaryNav(),
    navItems: await loadMainNav(options),
  };
};
