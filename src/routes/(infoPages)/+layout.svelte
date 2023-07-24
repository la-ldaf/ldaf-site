<!-- Shared layout for all informative pages (Top Tiers, Service Groups, Offices, Boards/Commissions)-->
<script lang="ts">
  import { page } from "$app/stores";
  import Breadcrumbs from "$lib/components/Breadcrumbs";

  $: ({ breadcrumbs } = $page.data.pageMetadata);
</script>

<div class="grid-container">
  <Breadcrumbs path={breadcrumbs} />
  <slot />
</div>
