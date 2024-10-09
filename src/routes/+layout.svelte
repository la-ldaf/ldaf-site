<script lang="ts">
  import "../app.scss";

  import type { PageMetadataMap, PageMetadataMapItem } from "$lib/loadPageMetadataMap";

  import { partytownSnippet } from "@builder.io/partytown/integration";
  import { setContext } from "svelte";
  import { afterNavigate, beforeNavigate, goto, invalidate } from "$app/navigation";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  import isInIframe from "$lib/util/isInIframe";
  import Analytics from "$lib/components/Analytics";
  import Header from "$lib/components/Header";
  import Footer from "$lib/components/Footer";
  import Link from "$lib/components/Link";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";
  import { setCurrentUserStore } from "$lib/context/currentUser";
  import LoginLink from "$lib/components/LoginLink/LoginLink.svelte";

  export let data;
  $: ({
    isProd,
    headerPrimaryNavItems,
    headerSecondaryNavItems,
    footerNavItems,
    siteTitle,
    pageMetadataMap,
    previewAuthenticationError,
  } = data);

  // Vercel Speed Insights
  injectSpeedInsights({
    // The percentage of events to send (between 0 and 1); default is 1.
    // TODO: Decrease this to 0.75 for cost savings, if needed.
    sampleRate: 1,
    // Unfortunately this will only provide a success or error message
    //   indicating whether the package was loaded but does not include any
    //   event information. If you want to see what's happening, you'll need
    //   to deploy to a preview environment and inspect the network requests
    //   for POSTs to /_vercel/speed-insights/vitals
    //debug: !speedInsightsEnabled,
  });

  setCurrentUserStore(data.currentUser);

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
      (item) => "link" in item && item.link === $page.url.pathname,
    );
    headerPrimaryNavItems.forEach(
      (_, i) => (headerPrimaryNavItems[i].current = i === activeNavItemIndex),
    );
  }

  let navMenuExpanded = false;
  $: if ($navigating) navMenuExpanded = false;

  // This is a workaround for https://github.com/sveltejs/kit/issues/10122
  // eslint-disable-next-line no-undef
  let lastPageURL: URL | undefined, lastPageError: App.Error | null | undefined;
  $: ({ url: lastPageURL, error: lastPageError } = $page || {});
  beforeNavigate(async ({ to, type, cancel }) => {
    const previousPreviewValue = lastPageURL?.searchParams.get("preview");
    if (
      typeof previousPreviewValue === "string" &&
      type === "link" &&
      to &&
      !to.url.searchParams.has("preview") &&
      !lastPageError &&
      !previewAuthenticationError &&
      !(to.url.pathname === "/login" || to.url.pathname === "/logout")
    ) {
      to.url.searchParams.set("preview", previousPreviewValue);
    }

    if (
      type === "link" &&
      to &&
      previewAuthenticationError &&
      !(to.url.pathname === "/login" || to.url.pathname === "/logout")
    ) {
      to.url.searchParams.delete("preview");
      cancel();
      await goto(to.url.toString());
      invalidate("app:previewAuthenticationError");
    }
  });

  $: inIframe = browser && isInIframe();
  $: loginLinkProps = inIframe ? { target: "_blank" } : {};

  let pageLinkWithoutPreview: string;
  $: {
    const url = new URL($page.url);
    url.searchParams.delete("preview");
    pageLinkWithoutPreview = url.toString();
  }
</script>

<svelte:head>
  <script>
    // https://partytown.builder.io/sveltekit
    // Forward globals to web worker layer.
    // This allows the web worker to use dataLayer.push while allowing the main
    //   thread to use the gtag alias.
    partytown = { forward: ["gtag", "dataLayer.push"] };
  </script>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html `${"<"}script>${partytownSnippet()}</script>`}
  <Analytics {isProd} />

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
    <meta name="og:url" content={`https://www.ldaf.la.gov${pageMetadata.url}`} />
    <!-- Since we are serving the same site on multiple domains, we need to
         mark `ldaf.la.gov` as the canonical domain to avoid issues where
         search engines will split indexing of pages across different domains.
         For example, without this element, Google might consider the canonical
         homepage to be `ldaf.state.la.us` but might consider the canonical
         "Contact Us" page to be `ldaf.la.gov/about/contact`, which can lead to
         confusing search results split across the different domains. -->
    <link rel="canonical" href={`https://www.ldaf.la.gov${pageMetadata.url}`} />
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
  <Link class="usa-skipnav" href="#main-content">Skip to main content</Link>
  <div class="usa-overlay" />
  <Header
    primaryNavItems={headerPrimaryNavItems}
    secondaryNavItems={headerSecondaryNavItems}
    {siteTitle}
    bind:navMenuExpanded
  />
  {#if previewAuthenticationError}
    <div class="usa-section usa-prose grid-container">
      <h1>{previewAuthenticationError.status}</h1>
      <p>{previewAuthenticationError.message}</p>
      <p>
        (Do you need to <LoginLink {...loginLinkProps}>log in</LoginLink> or visit the
        <a href={pageLinkWithoutPreview}>public version of the page</a>?)
      </p>
    </div>
  {:else}
    <slot />
  {/if}
  <Footer navItems={footerNavItems} {siteTitle} {afterNavigate} />
</RootIntersectionObserver>

<BlurhashRenderer />
