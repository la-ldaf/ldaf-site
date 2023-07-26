<script lang="ts">
  import { url as arrowIcon } from "$icons/arrow_forward";

  import Button, { type Variant } from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import VideoCard from "$lib/components/VideoCard";

  export let data;
  $: ({ topTierPage } = data);
  $: ({ subheading, video, description, featuredServices } = topTierPage);

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

{#if subheading}
  <h2>
    {subheading}
  </h2>
{/if}
{#if description?.json}
  <ContentfulRichText document={description.json} />
{/if}
{#if video?.videoUrl}
  <VideoCard url={video.videoUrl} title={video.videoTitle} description={video.videoSubhead} />
{/if}
{#if featuredServices}
  <ul class="ldaf-card-list">
    {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
      <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
      {#if item?.heroImage?.imageSource?.url}
        <Card>
          <h3 class="usa-card__heading" slot="header">{item.title}</h3>
          <img
            slot="image"
            src={item.heroImage.imageSource.url}
            alt={item.heroImage.imageSource.title}
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

<style>
  .ldaf-card-list {
    padding-inline-start: 0;
    list-style: none;
  }
</style>
