<script lang="ts">
  import { url as arrowIcon } from "$icons/arrow_forward";

  import Button, { type Variant } from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";

  export let data;
  $: ({ topTierPage, pageMetadata } = data);
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

<h2>
  {subheading}
</h2>
{#if description}
  <ContentfulRichText document={description?.json} />
{/if}
{#if video?.videoUrl}
  <div>
    <!-- TODO: Perform some querystring parsing to get the video ID -->
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${video.videoUrl.slice(-11)}`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>
{/if}
{#if featuredServices}
  <ul class="ldaf-card-list">
    {#each featuredServices as item, index (item?.pageMetadata?.sys.id)}
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
          <!-- TODO: Use <Link /> pending LDAF-301 (link styled as button support) -->
          <Button
            slot="footer"
            isLink={true}
            variant={getButtonVariant(index)}
            href={item.url}
            class="usa-button ldaf-card-button"
          >
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
          <!-- TODO: Use <Link /> pending LDAF-301 (link styled as button support) -->
          <Button
            slot="footer"
            isLink={true}
            variant={getButtonVariant(index)}
            href={item.url}
            class="usa-button ldaf-card-button"
          >
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
