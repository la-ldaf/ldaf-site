<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb";
  import SideNav from "$lib/components/SideNav";

  export let data;
  const { breadcrumbs, sidenav } = data;
</script>

<div class="grid-container">
  <Breadcrumb path={breadcrumbs} currentPageTitle="" />
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <SideNav tree={sidenav} />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
      <slot />
    </main>
  </div>
</div>
