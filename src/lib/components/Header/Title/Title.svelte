<script lang="ts">
  import "./Title.scss";

  import { page } from "$app/stores";

  import ConditionalWrapper from "$lib/components/ConditionalWrapper";
  import Logo from "$lib/components/Logo";

  // We want to provide the site title as the <h1> on the homepage only;
  //   elsewhere we want to use existing <h1>s and provide accessible link text
  //   for the logo.
  $: isHomePage = $page.url.pathname === "/";
  $: accessibleTitleText = isHomePage
    ? "Louisiana Department of Agriculture and Forestry"
    : "Go to home page.";
</script>

<div class="usa-logo ldaf-logo__desktop-full display-none desktop:display-flex">
  <ConditionalWrapper tag="h1" condition={isHomePage} class="margin-0">
    <a href="/">
      <span class="usa-sr-only">
        {accessibleTitleText}
      </span>
      <Logo placement="desktop-header" />
    </a>
  </ConditionalWrapper>
</div>

<div class="usa-logo ldaf-logo__mobile-title display-block desktop:display-none">
  <ConditionalWrapper tag="h1" condition={isHomePage} class="margin-0">
    <a href="/">
      <span class="usa-sr-only">
        {accessibleTitleText}
      </span>
      <Logo placement="mobile-header-main" />
    </a>
  </ConditionalWrapper>
</div>
