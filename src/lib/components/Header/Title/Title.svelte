<script lang="ts">
  import "./Title.scss";

  import { page } from "$app/stores";

  import Logo from "../Logo";
  import ConditionalWrapper from "$lib/components/ConditionalWrapper";

  import type { SiteTitleType } from "./types";

  export let siteTitle: SiteTitleType;
</script>

<div class="usa-logo ldaf-logo__wide" id="basic-logo">
  <a href="/">
    <Logo />
  </a>
  <div class="ldaf-agency-info">
    <ConditionalWrapper
      tag="h1"
      condition={$page.url.pathname === "/"}
      class="ldaf-header-homepage-heading"
    >
      <div class="ldaf-name__wide">
        <span class="text-bold">{siteTitle.wideTitleRow1}</span>
        <span class="text-normal">{siteTitle.wideTitleRow2}</span>
      </div>
    </ConditionalWrapper>
    <div class="separator" />
    <div class="ldaf-commissioner__wide">
      <span class="text-normal">{siteTitle.commissionerRow1}</span>
      <span class="text-italic">{siteTitle.commissionerRow2}</span>
    </div>
  </div>
</div>

<div class="usa-logo ldaf-title__compact">
  <a href="/">
    <ConditionalWrapper
      tag="h1"
      condition={$page.url.pathname === "/"}
      class="ldaf-header-homepage-heading"
    >
      <div class="ldaf-name__compact">
        <span class="text-bold">{siteTitle.compactTitleRow1}</span>
        <span class="text-bold">{siteTitle.compactTitleRow2}</span>
      </div>
    </ConditionalWrapper>
  </a>
</div>
