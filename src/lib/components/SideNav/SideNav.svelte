<!-- This component is still incomplete. -->
<!-- TODO: https://ldaf.atlassian.net/browse/LDAF-219 -->
<script lang="ts">
  import SideNavItem from "./SideNavItem.svelte";
  import type { SideNavItemType } from "./types";
  export let tree: SideNavItemType[];
  export let currentPath: string | null;
</script>

<nav aria-label="Side navigation">
  <p><strong>In this section</strong></p>
  <ul class="usa-sidenav">
    {#each tree as { id, ...leaf } (id)}
      <SideNavItem {...leaf} {currentPath} />
    {/each}
  </ul>
</nav>
