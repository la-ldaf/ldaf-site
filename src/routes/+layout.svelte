<script lang="ts">
  import { setContext } from "svelte";
  import { navigating, page } from "$app/stores";
  import { browser } from "$app/environment";
  import { beforeNavigate, goto, invalidate } from "$app/navigation";
  import "../app.scss";
  import DotGovBanner from "$lib/components/DotGovBanner";
  import Header from "$lib/components/Header";
  import { intersectionObserverSupport, lazyImageLoadingSupport } from "$lib/constants/support";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";
  import { BlurhashRenderer } from "$lib/components/Image";
  import isInIframe from "$lib/util/isInIframe";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import LoginLink from "$lib/components/LoginLink";
  import { writable, type Writable } from "svelte/store";
  import { newPublicLogger } from "$lib/logger/public";

  export let data;

  const { loggerContext } = data;
  const logger = newPublicLogger({ context: loggerContext });
  setContext("logger", logger);
  logger.setPublicContext("initialURL", loggerContext.url);

  $: logger.setPublicContext("url", $page.url.toString());

  const currentUserStore = writable<CurrentUser | undefined>(data.currentUser);
  $: setContext<Writable<CurrentUser | undefined>>(currentUserKey, currentUserStore);

  $: ({ navItems, secondaryNavItems, siteTitle, previewAuthenticationError } = data);

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

<RootIntersectionObserver enabled={intersectionObserverSupport && !lazyImageLoadingSupport}>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <DotGovBanner />
  <div class="usa-overlay" />
  <Header {navItems} {secondaryNavItems} {siteTitle} bind:navMenuExpanded />
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
    <!-- TODO: reinstate <Footer /> once designed and implemented -->
    <footer class="usa-footer padding-top-7 padding-bottom-1 text-center">
      ©2023 Louisiana Department of Agriculture and Forestry. All rights reserved
    </footer>
    <!-- TODO: reinstate <Identifier /> once designed and implemented -->
    <!-- (or remove if encapsulated by footer) -->
  {/if}
</RootIntersectionObserver>

<BlurhashRenderer />
