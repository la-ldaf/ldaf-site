<script lang="ts">
  import type NavItemType from "$lib/components/Header/Nav/NavItemType";

  import { page } from "$app/stores";
  import "../app.scss";
  import Banner from "$lib/components/landingPage/Banner.svelte";
  import Footer from "$lib/components/landingPage/Footer.svelte";
  import Header from "$lib/components/Header";
  import Identifier from "$lib/components/landingPage/Identifier.svelte";

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
  // Update the active nav item based on the current path.
  let activeNavItemIndex = -1;
  $: {
    activeNavItemIndex = navItems.findIndex((item) => item.link === $page.url.pathname);
    navItems.forEach((_, i) => {
      navItems[i].isCurrent = i === activeNavItemIndex;
    });
  }
</script>

<a class="usa-skipnav" href="#main-content">Skip to main content</a>
<Banner />
<div class="usa-overlay" />
<Header {navItems} />
<main id="main-content">
  <slot />
</main>
<Footer />
<Identifier />
