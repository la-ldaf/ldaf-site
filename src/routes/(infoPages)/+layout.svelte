<!-- Shared layout for all informative pages (Top Tiers, Service Groups, Offices, Boards/Commissions)-->
<script lang="ts">
  import { page } from "$app/stores";
  import SideNav from "$lib/components/SideNav";
  import Layout from "./Layout.svelte";

  $: ({ pathname } = $page.url);
  $: ({ pageMetadata, sideNavMap } = $page.data);
  $: ({ breadcrumbs } = pageMetadata ?? {});
  $: topTierSlug = pathname.split("/")[1];
  $: sideNavTree = sideNavMap.get(topTierSlug).children;
</script>

<Layout breadcrumbs={breadcrumbs ?? []}>
  <svelte:fragment slot="sideNav">
    <SideNav tree={sideNavTree} currentPath={pathname} />
  </svelte:fragment>
  <slot />
</Layout>
