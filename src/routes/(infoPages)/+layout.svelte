<!-- Shared layout for all informative pages (Top Tiers, Service Groups, Offices, Boards/Commissions)-->
<script lang="ts">
  import "./layout.scss";
  import { page } from "$app/stores";
  import Breadcrumbs from "$lib/components/Breadcrumbs";
  import SideNav from "$lib/components/SideNav";
  import Image from "$lib/components/Image";
  import { getSources } from "$lib/imageServices/contentful";

  $: ({ pathname } = $page.url);
  $: ({ pageMetadata, sideNavMap, __typename, topTierPage } = $page.data);

  $: breadcrumbs = $page.data.breadcrumbs ?? pageMetadata.breadcrumbs;

  $: topTierSlug = pathname.split("/")[1];
  $: sideNavTree = sideNavMap.get(topTierSlug).children;
</script>

<div class="grid-container">
  <Breadcrumbs path={breadcrumbs ?? []} />
</div>
<!-- Top Tier pages have a slightly different layout, with a hero image and title above the rest of the layout. -->
{#if __typename === "TopTier"}
  {#if topTierPage?.heroImage?.imageSource}
    <Image
      class="top-tier-page-hero-image"
      src={topTierPage.heroImage.imageSource.url}
      alt={topTierPage.heroImage.imageSource.description}
      sources={getSources}
      width={topTierPage.heroImage.imageSource.width}
      height={topTierPage.heroImage.imageSource.height}
      sizeType="full-bleed"
      blurhash={topTierPage.heroImage.imageSource.blurhash}
      fit={true}
      preserveAspectRatio={false}
      loading="eager"
    />
    {#if topTierPage.heroImage.fotogCredit}
      <div class="grid-container">
        <p class="font-sans-3xs text-base-dark">
          Photo credit: {topTierPage.heroImage.fotogCredit}
        </p>
      </div>
    {/if}
  {/if}
  <div class="grid-container">
    <h1>{topTierPage?.title}</h1>
  </div>
{/if}

<div class="grid-container">
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <SideNav tree={sideNavTree} currentPath={pathname} />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
      <slot />
    </main>
  </div>
</div>
