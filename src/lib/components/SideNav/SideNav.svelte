<!-- This is currently a stubbed component for use on the Office Page. -->
<!-- TODO: https://ldaf.atlassian.net/browse/LDAF-219 -->
<script lang="ts">
  import SideNavItem from "./SideNavItem.svelte";
  import type SideNavItemType from "./types";
  export let tree: SideNavItemType[];
  export let activeItem: string | null;
</script>

<nav aria-label="Side navigation">
  <p><strong>In this section</strong></p>
  <ul class="usa-sidenav">
    {#each tree as { id, ...leaf } (id)}
      <SideNavItem {...leaf} {activeItem} isCurrent={id === activeItem} />
    {/each}
  </ul>
</nav>
