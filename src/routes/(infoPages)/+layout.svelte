<!-- Shared layout for all informative pages (Top Tiers, Service Groups, Offices, Boards/Commissions)-->
<script lang="ts">
  import { page } from "$app/stores";
  import Breadcrumbs from "$lib/components/Breadcrumbs";
  import SideNav from "$lib/components/SideNav";

  import type { PageMetadataMapItem } from "../loadPageMetadataMap";

  const getTopTier = (metadata: PageMetadataMapItem): PageMetadataMapItem => {
    if (metadata.parent) {
      const parent = pageMetadataMap.get(metadata.parent.sys.id);
      if (parent && !parent.isRoot) {
        return getTopTier(parent);
      }
    }
    return metadata;
  };

  $: ({ pathname } = $page.url);
  $: ({ pageMetadata, pageMetadataMap, sideNavMap } = $page.data);
  $: ({ breadcrumbs } = pageMetadata);
  $: topTierSlug = getTopTier(pageMetadata).slug;
  $: sideNavTree = sideNavMap.get(topTierSlug).children;
</script>

<!-- TODO: Support variation of layout for Top Tier pages (includes hero image above breadcrumbs) -->
<div class="grid-container">
  <Breadcrumbs path={breadcrumbs} />
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <SideNav tree={sideNavTree} currentPath={pathname} />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
      <slot />
    </main>
  </div>
</div>
