<script lang="ts">
  import SideNav from "$lib/components/SideNav";

  export let data;
  const { sidenav } = data;

  // TODO: Find the current page in the sidenav to mark it as current.
  // Use $page.url.pathname to find the match.
</script>

<div class="grid-row grid-gap">
  <div class="desktop:grid-col-3 margin-bottom-2">
    <SideNav tree={sidenav} />
  </div>
  <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
    <slot />
  </main>
</div>
