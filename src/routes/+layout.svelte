<script lang="ts">
  import type { PageMetadataMap } from "$lib/loadPageMetadataMap";

  import { setContext } from "svelte";
  import { navigating } from "$app/stores";
  import { page } from "$app/stores";
  import "../app.scss";
  import Header from "$lib/components/Header";
  import Footer from "$lib/components/Footer";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";

  export let data;
  $: ({
    headerPrimaryNavItems,
    headerSecondaryNavItems,
    footerNavItems,
    siteTitle,
    pageMetadataMap,
  } = data);

  $: setContext<PageMetadataMap>(pageMetadataMapKey, pageMetadataMap);

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
  <div class="usa-overlay" />
  <Header
    primaryNavItems={headerPrimaryNavItems}
    secondaryNavItems={headerSecondaryNavItems}
    {siteTitle}
    bind:navMenuExpanded
  />
  <slot />
  <Footer navItems={footerNavItems} {siteTitle} />
</RootIntersectionObserver>

<BlurhashRenderer />
