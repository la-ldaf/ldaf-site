import { error } from "@sveltejs/kit";
import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async (options) => {
  const {
    locals: { previewAuthenticationError },
  } = options;
  if (previewAuthenticationError) {
    const { code, message } = previewAuthenticationError;
    throw error(code, { message });
  }
  return {
    siteTitle: loadSiteTitle(),
    secondaryNavItems: loadSecondaryNav(),
    navItems: await loadMainNav(options),
  };
};
