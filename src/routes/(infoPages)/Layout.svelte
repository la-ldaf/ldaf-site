<script lang="ts">
  import Breadcrumbs, { type BreadcrumbsType } from "$lib/components/Breadcrumbs";

  export let breadcrumbs: BreadcrumbsType;
</script>

<div class="grid-container">
  <Breadcrumbs {breadcrumbs} />
</div>

<slot name="hero" />

<div class="grid-container">
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <slot name="sideNav" />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
      <slot />
    </main>
  </div>
</div>
