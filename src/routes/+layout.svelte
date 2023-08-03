<script lang="ts">
  import type { NavItemType, NavLinkType } from "$lib/components/Header/Nav";
  import type { SiteTitleType } from "$lib/components/Header/Title";
  import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

  import { setContext } from "svelte";
  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import DotGovBanner from "$lib/components/DotGovBanner";
  import Header from "$lib/components/Header";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";

  export let data;
  $: ({ navItems, secondaryNavItems, siteTitle, pageMetadataMap } = data);

  $: setContext<PageMetadataMap>(pageMetadataMapKey, pageMetadataMap);

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
  <footer class="usa-footer ldaf-footer--main padding-top-7 padding-bottom-1 text-center">
    ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
  </footer>
  <!-- TODO: reinstate <Identifier /> once designed and implemented -->
  <!-- (or remove if encapsulated by footer) -->
</RootIntersectionObserver>

<BlurhashRenderer />
