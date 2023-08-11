<script lang="ts">
  import "./page.scss";

  import { url as arrowIcon } from "$icons/arrow_forward";

  import { page } from "$app/stores";
  import Button, { type Variant } from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import VideoCard from "$lib/components/VideoCard";
  import Image from "$lib/components/Image/Image.svelte";
  import { getSources } from "$lib/imageServices/contentful";

  import Layout from "../Layout.svelte";
  import SideNav from "$lib/components/SideNav/SideNav.svelte";

  export let data;
  $: ({ topTierPage, pageMetadata, sideNavMap } = data);
  $: ({ subheading, video, description, featuredServices } = topTierPage);
  $: breadcrumbs = pageMetadata.breadcrumbs ?? [];
  $: ({ pathname } = $page.url);
  $: sideNavTree = sideNavMap.get(pathname.split("/")[1])?.children;

  const getButtonVariant = (index: number): Variant => {
    switch (index) {
      case 0:
        return "primary";
      case 1:
        return "secondary";
      default:
        return "outline";
    }
  };
</script>

<Layout {breadcrumbs}>
  <svelte:fragment slot="hero">
    {#if topTierPage?.heroImage?.imageSource?.url}
      {@const { url, description, width, height, blurhash } = topTierPage.heroImage.imageSource}
      <Image
        class="top-tier-page-hero-image"
        src={url}
        alt={description ?? "Hero image"}
        sources={getSources}
        {width}
        {height}
        sizeType="full-bleed"
        {blurhash}
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
      <h1>{topTierPage.title}</h1>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="sideNav">
    <SideNav tree={sideNavTree ?? []} currentPath={pathname} />
  </svelte:fragment>

  {#if subheading}
    <h2>
      {subheading}
    </h2>
  {/if}
  {#if description?.json}
    <ContentfulRichText document={description.json} />
  {/if}
  {#if video?.videoUrl}
    <VideoCard
      url={video.videoUrl}
      customTitle={video.videoTitle}
      customDescription={video.videoSubhead}
      variation="secondary"
    />
  {/if}
  {#if featuredServices && featuredServices.length > 0}
    <ul class="service-group-list">
      {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
        <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
        {#if item?.heroImage?.imageSource?.url}
          <Card>
            <h3 class="usa-card__heading" slot="header">{item.title}</h3>
            <Image
              slot="image"
              src={item.heroImage.imageSource.url}
              sources={getSources}
              alt={item.heroImage.imageSource.title ?? "Hero image"}
              blurhash={item.heroImage.imageSource.blurhash ?? undefined}
              height={item.heroImage.imageSource.height ?? undefined}
              width={item.heroImage.imageSource.width ?? undefined}
              sizeType="card"
            />
            <svelte:fragment slot="body">
              {#if item.subheading}
                {item.subheading}
              {/if}
            </svelte:fragment>
            <Button slot="footer" isLink={true} variant={getButtonVariant(index)} href={item.url}>
              <Icon src={arrowIcon} size={3} />
            </Button>
          </Card>
        {:else}
          <Card>
            <h3 class="usa-card__heading" slot="header">{item.title}</h3>
            <svelte:fragment slot="body">
              {#if item.subheading}
                {item.subheading}
              {/if}
            </svelte:fragment>
            <Button slot="footer" isLink={true} variant={getButtonVariant(index)} href={item.url}>
              <Icon src={arrowIcon} size={3} />
            </Button>
          </Card>
        {/if}
      {/each}
    </ul>
  {/if}
</Layout>
