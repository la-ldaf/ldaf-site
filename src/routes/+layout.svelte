<script lang="ts">
  import type { NavItemType, NavLinkType } from "$lib/components/Header/Nav";
  import type { SiteTitleType } from "$lib/components/Header/Title";

  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import DotGovBanner from "$lib/components/DotGovBanner";
  import Header from "$lib/components/Header";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";

  export let data;
  const {
    navItems,
    secondaryNavItems,
    siteTitle,
  }: { navItems: NavItemType[]; secondaryNavItems: NavLinkType[]; siteTitle: SiteTitleType } = data;

  // Update the active nav item based on the current path.
  let activeNavItemIndex = -1;
  $: {
    activeNavItemIndex = navItems.findIndex(
      (item) => "link" in item && item.link === $page.url.pathname
    );
    navItems.forEach((_, i) => (navItems[i].current = i === activeNavItemIndex));
  }

  let navMenuExpanded = false;
  $: if ($navigating) navMenuExpanded = false;
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <DotGovBanner />
  <div class="usa-overlay" />
  <Header {navItems} {secondaryNavItems} {siteTitle} bind:navMenuExpanded />
  <slot />
  <!-- TODO: reinstate <Footer /> once designed and implemented -->
  <footer class="usa-footer padding-top-7 padding-bottom-1 text-center">
    ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
  </footer>
  <!-- TODO: reinstate <Identifier /> once designed and implemented -->
  <!-- (or remove if encapsulated by footer) -->
</RootIntersectionObserver>

<BlurhashRenderer />
