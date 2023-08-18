<script lang="ts">
  import type { PageMetadataMap, PageMetadataMapItem } from "$lib/loadPageMetadataMap";

  import { setContext } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";
  import { beforeNavigate, goto, invalidate } from "$app/navigation";
  import "../app.scss";
  import Header from "$lib/components/Header";
  import Footer from "$lib/components/Footer";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import isInIframe from "$lib/util/isInIframe";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import LoginLink from "$lib/components/LoginLink";
  import { writable, type Writable } from "svelte/store";
  import { newPublicLogger } from "$lib/logger/public";
  import { key as pageMetadataMapKey } from "$lib/context/pageMetadataMap";

  export let data;

  const { loggerContext } = data;

  const logger = newPublicLogger({ context: loggerContext });
  setContext("logger", logger);
  logger.setPublicContext("initialURL", loggerContext.url);

  $: logger.setPublicContext("url", $page.url.toString());

  const currentUserStore = writable<CurrentUser | undefined>(data.currentUser);
  $: setContext<Writable<CurrentUser | undefined>>(currentUserKey, currentUserStore);

  $: ({
    headerPrimaryNavItems,
    headerSecondaryNavItems,
    footerNavItems,
    siteTitle,
    pageMetadataMap,
    previewAuthenticationError,
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

  // This is a workaround for https://github.com/sveltejs/kit/issues/10122
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
  {#if previewAuthenticationError}
    <div class="usa-section usa-prose grid-container">
      <h1>{previewAuthenticationError.status}</h1>
      <p>{previewAuthenticationError.message}</p>
      <p>
        (Do you need to <LoginLink {...loginLinkProps}>log in</LoginLink> or visit the
        <a href={$page.url.toString()}>public version of the page</a>?)
      </p>
    </div>
  {:else}
    <main id="main-content">
      <slot />
    </main>
  {/if}
  <Footer navItems={footerNavItems} {siteTitle} {afterNavigate} />
</RootIntersectionObserver>

<BlurhashRenderer />
