<script lang="ts">
  import type { NavItemType, NavLinkType, NavMenuType } from "$lib/components/Header/Nav";
  import type { SiteTitleType } from "$lib/components/Header/Title";

  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import DotGovBanner from "$lib/components/DotGovBanner";
  import Header from "$lib/components/Header";
  import Footer from "$lib/components/Footer";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";

  export let data;
  const {
    headerPrimaryNavItems,
    headerSecondaryNavItems,
    footerNavItems,
    siteTitle,
  }: {
    headerPrimaryNavItems: NavItemType[];
    headerSecondaryNavItems: NavLinkType[];
    footerNavItems: NavMenuType[];
    siteTitle: SiteTitleType;
  } = data;

  // Update the active nav item based on the current path.
  let activeNavItemIndex = -1;
  $: {
    activeNavItemIndex = headerPrimaryNavItems.findIndex(
      (item) => "link" in item && item.link === $page.url.pathname
    );
    headerPrimaryNavItems.forEach(
      (_, i) => (headerPrimaryNavItems[i].current = i === activeNavItemIndex)
    );
  }

  let navMenuExpanded = false;
  $: if ($navigating) navMenuExpanded = false;
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <div id="top" />
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <DotGovBanner />
  <div class="usa-overlay" />
  <Header
    primaryNavItems={headerPrimaryNavItems}
    secondaryNavItems={headerSecondaryNavItems}
    {siteTitle}
    bind:navMenuExpanded
  />
  <slot />
  <!-- <footer class="usa-footer ldaf-footer--main padding-top-7 padding-bottom-1 text-center">
    ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
  </footer> -->
  <Footer navItems={footerNavItems} />
  <!-- TODO: reinstate <Identifier /> once designed and implemented -->
  <!-- (or remove if encapsulated by footer) -->
</RootIntersectionObserver>

<BlurhashRenderer />
