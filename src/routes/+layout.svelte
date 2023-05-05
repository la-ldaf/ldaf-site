<script lang="ts">
  import "../app.scss";

  import type { PageMetadataMap, PageMetadataMapItem } from "$lib/loadPageMetadataMap";

  import { setContext } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";

  import { PUBLIC_VERCEL_SPEED_INSIGHTS_ANALYTICS_ID as analyticsID } from "$env/static/public";

  import { webVitals } from "$lib/vitals";
  import Header from "$lib/components/Header";
  import Footer from "$lib/components/Footer";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";

  $: if (browser && analyticsID) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsID,
    });
  }

  export let data;
  $: ({
    headerPrimaryNavItems,
    headerSecondaryNavItems,
    footerNavItems,
    siteTitle,
    pageMetadataMap,
  } = data);

  $: ({ pageMetadata } = $page.data);

  const getTitle = (pageMetadata: PageMetadataMapItem) => {
    let title = "";
    if (pageMetadata?.metaTitle) title = pageMetadata.metaTitle;
    else if (pageMetadata?.title) title = pageMetadata.title;
    if (title) title += " | ";
    return title + "Louisiana Department of Agriculture and Forestry";
  };

  $: pageTitle = getTitle(pageMetadata);

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

<svelte:head>
  <!-- TODO: Move all hard-coded content below into Contentful. -->
  <title>{pageTitle}</title>
  <meta name="og:title" content={pageTitle} />
  <meta name="twitter:title" content={pageTitle} />
  {#if pageMetadata?.metaDescription}
    <meta name="description" content={pageMetadata.metaDescription} />
    <meta name="og:description" content={pageMetadata.metaDescription} />
    <meta name="twitter:description" content={pageMetadata.metaDescription} />
  {/if}
  {#if pageMetadata?.url}
    <meta name="og:url" content={`https://ldaf.la.gov${pageMetadata.url}`} />
  {/if}
  <meta name="og:site_name" content="Louisiana Department of Agriculture and Forestry" />
  <!-- TODO: We could use our Contentful content types here instead. -->
  <meta name="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@LaAgandForestry" />
  <!--
    TODO: Add meta tags for the following if desired:
          * topics (once we have categories in Contentful)
          * keywords (once we have SEO keywords in Contentful)
          * og:image (including og:image:height and og:image:width)
          * twitter:image (and twitter:image:alt)
  -->
</svelte:head>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <!-- Target for the "Return to top" link in the footer. -->
  <div id="top" />
  <!-- TODO: Skip nav will always scroll user to main, but will only shift
             focus if the URL doesn't already include #main-content.
             Shift focus back to main if user hits this more than once. -->
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <div class="usa-overlay" />
  <Header
    primaryNavItems={headerPrimaryNavItems}
    secondaryNavItems={headerSecondaryNavItems}
    {siteTitle}
    bind:navMenuExpanded
  />
  <slot />
  <Footer navItems={footerNavItems} {siteTitle} {afterNavigate} />
</RootIntersectionObserver>

<BlurhashRenderer />
