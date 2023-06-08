<script lang="ts">
  import { setContext } from "svelte";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";
  import { beforeNavigate } from "$app/navigation";
  import "../app.scss";
  import Banner from "$lib/components/landingPage/Banner.svelte";
  import Header from "$lib/components/Header";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import LoginLink from "$lib/components/LoginLink/LoginLink.svelte";
  import isInIframe from "$lib/util/isInIframe";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";

  export let data;

  setContext<CurrentUser | undefined>(currentUserKey, data.currentUser);

  const { navItems, secondaryNavItems, siteTitle, previewAuthenticationError } = data;

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

  // This is a workaround for https://github.com/sveltejs/kit/issues/10122
  let lastPageURL: URL | undefined;
  $: lastPageURL = $page?.url;
  beforeNavigate(({ to }) => {
    const previousPreviewValue = lastPageURL?.searchParams.get("preview");
    if (typeof previousPreviewValue === "string" && to && !to.url.searchParams.has("preview")) {
      to?.url.searchParams.set("preview", previousPreviewValue);
    }
  });

  $: inIframe = browser && isInIframe();

  type ShowLoginLinkState = "uninitialized" | "sameWindow" | "newWindow";
  let showLoginLink: ShowLoginLinkState = "uninitialized";
  const getShowLoginLink = (browser: boolean, inIframe: boolean): ShowLoginLinkState => {
    if (!browser) return "uninitialized";
    return inIframe ? "newWindow" : "sameWindow";
  };
  $: showLoginLink = getShowLoginLink(browser, inIframe);
  $: loginLinkProps = showLoginLink === "newWindow" ? { target: "_blank" } : {};
</script>

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <Banner />
  <div class="usa-overlay" />
  <Header {navItems} {secondaryNavItems} {siteTitle} bind:navMenuExpanded />
  {#if previewAuthenticationError}
    <div class="usa-section usa-prose grid-container">
      <h1>{previewAuthenticationError.code}</h1>
      <p>{previewAuthenticationError.message}</p>
      {#if showLoginLink !== "uninitialized"}
        <p>
          (Do you need to <LoginLink {...loginLinkProps}>login</LoginLink>?)
        </p>
      {/if}
    </div>
  {:else}
    <main id="main-content">
      <slot />
    </main>
    <!-- TODO: reinstate <Footer /> once designed and implemented -->
    <footer class="usa-footer padding-top-7 padding-bottom-1 text-center">
      ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
    </footer>
    <!-- TODO: reinstate <Identifier /> once designed and implemented -->
    <!-- (or remove if encapsulated by footer) -->
  {/if}
</RootIntersectionObserver>

<BlurhashRenderer />
