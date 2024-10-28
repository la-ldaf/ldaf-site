<script lang="ts">
  import "./Title.scss";

  import { page } from "$app/stores";

  import ConditionalWrapper from "$lib/components/ConditionalWrapper";
  import Logo from "$lib/components/Logo";

  import type { SiteTitleType } from "./types";

  export let siteTitle: SiteTitleType;
</script>

<div class="usa-logo ldaf-logo__desktop-full display-none desktop:display-flex">
  <ConditionalWrapper tag="h1" condition={$page.url.pathname === "/"} class="margin-0">
    <a href="/">
      <Logo variant="horiz-wide-commissioner" />
      <span class="usa-sr-only">
        {siteTitle.wideTitleRow1}
        {siteTitle.wideTitleRow2}
        {siteTitle.commissionerRow1}
        {siteTitle.commissionerRow2}
      </span>
    </a>
  </ConditionalWrapper>
</div>

<div class="usa-logo ldaf-logo__mobile-title display-block desktop:display-none">
  <ConditionalWrapper tag="h1" condition={$page.url.pathname === "/"} class="margin-0">
    <a href="/">
      <Logo variant="text" />
      <span class="usa-sr-only">
        {siteTitle.compactTitleRow1}
        {siteTitle.compactTitleRow2}
      </span>
    </a>
  </ConditionalWrapper>
</div>
