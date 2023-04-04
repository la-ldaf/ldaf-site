import type NavItemType from "$lib/components/Header/Nav/NavItemType";

export function load() {
  // TODO: Replace navItems with content from CMS.
  const placeholderNavItems = (n: number) =>
    [...Array(n)].map((_, i) => ({
      id: `${i}`,
      name: `Menu Item ${i + 1}`,
      link: "/",
    }));
  const navItems: NavItemType[] = [
    { id: "0", name: "Home", link: "/" },
    { id: "1", name: "News", link: "/news" },
    {
      id: "2",
      name: "Placeholder Basic Menu",
      children: placeholderNavItems(3),
    },
    {
      id: "3",
      name: "Placeholder MegaMenu",
      megaMenuColumns: 3,
      children: placeholderNavItems(9),
    },
  ];
  return { navItems };
}
