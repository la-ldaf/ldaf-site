import { loadSiteTitle } from "$lib/components/Header/Title/Title.server";
import { loadMainNav, loadSecondaryNav } from "$lib/components/Header/Nav/Nav.server";

export const load = async (options) => ({
  siteTitle: loadSiteTitle(),
  secondaryNavItems: loadSecondaryNav(),
  navItems: await loadMainNav(options),
});
