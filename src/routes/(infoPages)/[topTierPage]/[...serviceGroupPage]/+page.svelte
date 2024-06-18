<script lang="ts">
  import "../page.scss";
  import chunk from "lodash/chunk";
  import { afterUpdate } from "svelte";
  import { getSources } from "$lib/imageServices/contentful";
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Button from "$lib/components/Button";
  import Card, { CardGroup } from "$lib/components/Card";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import VideoCard from "$lib/components/VideoCard";
  import Image from "$lib/components/Image";
  import Link from "$lib/components/Link";
  import { url as arrowIcon } from "$icons/arrow_forward";
  import serviceGroupPageTestContent from "./__tests__/serviceGroupPageTestContent";

  export let data;
  $: ({
    serviceGroup: {
      title,
      subheading,
      description,
      heroImage,
      serviceListName,
      imageGalleryTitle,
      contactInfoCollection,
      additionalResources,
      video,
    },
    imageGallery,
    childServiceEntries,
    childServiceGroups,
  } = data);
  $: ({ videoUrl, youtubeVideoData } = video);
  $: videoTitle = video?.videoTitle ?? youtubeVideoData?.title;
  $: videoDescription = video?.videoSubhead ?? youtubeVideoData?.description;
  $: ({ thumbnails: videoThumbnails } = youtubeVideoData ?? ({} as Record<string, undefined>));
  // $: console.log("video", video);
  // $: console.log("videourl", videoUrl);
  // $: console.log("ytData", youtubeVideoData);
  // $: console.log("videoTitle", videoTitle);
  // $: console.log("videoDescription", videoDescription);
  // $: console.log("videoThumbnails", videoThumbnails);
  afterUpdate(() => {
    // Call To Actions within service entry accordions are rich text,
    // leaving no way to designate additional formatting/styling for them.
    // We must manually add the required classes to achieve the desired styles.
    // While we're at it, attach an analytics event so we can track CTA clicks.
    // This wasn't always getting applied in `onMount`, so we're making sure it doesn't
    // happen prematurely by using `afterUpdate` instead.
    document.querySelectorAll(".usa-accordion__heading").forEach((accordionHeading) => {
      const serviceAccordionHeadingText = accordionHeading.textContent;
      const serviceAccordionCTA = accordionHeading.nextElementSibling?.querySelector(
        ".service-entry-CTA p > a",
      );
      serviceAccordionCTA?.classList.add("usa-button");
      serviceAccordionCTA?.addEventListener("click", () => {
        window.gtag?.("event", "ldaf_service_cta_click", {
          event_category: "click",
          event_label: serviceAccordionCTA.textContent,
          ldaf_service_name: serviceAccordionHeadingText,
          ldaf_service_cta_destination: serviceAccordionCTA.getAttribute("href"),
        });
      });
    });

    // Just like the service group CTAs, do the same thing
    // for embedded CTAs in the general description.
    document
      .querySelectorAll(".embedded-entry-CTA p > a")
      .forEach((ctaElement) => ctaElement.classList.add("usa-button"));
  });
</script>

{#if heroImage?.imageSource?.url}
  <Image
    src={heroImage.imageSource.url}
    sources={getSources}
    blurhash={heroImage?.imageSource?.blurhash ?? undefined}
    alt={heroImage.imageSource?.description ?? "Hero image"}
    width={heroImage.imageSource?.width ?? undefined}
    height={heroImage.imageSource?.height ?? undefined}
    sizeType="col-9"
    loading="eager"
  />
{/if}
<h1>{title}</h1>
<p class="usa-intro">
  {subheading}
</p>
{#if description}
  <ContentfulRichText
    document={description?.json}
    links={description?.links}
    imageSizeType="col-9"
  />
{/if}

{#if videoUrl}
  <VideoCard
    class="margin-bottom-4"
    url={videoUrl}
    title={videoTitle}
    description={videoDescription}
    thumbnails={videoThumbnails}
    variation="secondary"
    sizeType="hero-col-9"
  />
{/if}

{#if childServiceEntries.length > 0 || childServiceGroups.length > 0}
  <h2>{serviceListName}</h2>
{/if}

{#if childServiceEntries.length > 0}
  <Accordion multiselectable bordered>
    {#each childServiceEntries as item (item.sys.id)}
      <AccordionItem
        title={item?.entryTitle}
        id={item.sys.id}
        onClickAnalyticsHandler={(expanded) => {
          window.gtag?.("event", `ldaf_service_accordion_${expanded ? "expand" : "collapse"}`, {
            event_category: "click",
            event_label: item?.entryTitle,
            value: expanded ? 1 : 0,
          });
        }}
      >
        <ContentfulRichText
          document={item?.description?.json}
          links={item?.description?.links}
          blurhashes={item?.description?.blurhashes}
        />
        {#if item.serviceCtaCollection}
          {#each item.serviceCtaCollection.items as ctaItem}
            <span class="service-entry-CTA">
              <ContentfulRichText
                document={ctaItem?.callToActionDestination?.json}
                links={ctaItem?.callToActionDestination?.links}
              />
            </span>
          {/each}
        {/if}

        <!-- .filter is to make sure there aren't any null 
             contact items(caused by contacts in a draft state) -->
        {#if (item?.contactInformationCollection?.items?.filter((item) => !!item) || []).length > 0}
          <ContactCard
            address={undefined}
            contacts={item.contactInformationCollection?.items}
            class="margin-top-4"
          />
        {/if}
      </AccordionItem>
    {/each}
  </Accordion>
{/if}

{#if childServiceGroups.length > 0}
  <CardGroup>
    {#each childServiceGroups as item (item?.sys?.id)}
      <!-- TODO: Can't conditionally render a named slot, but ideally we only declare Card once here. -->
      {#if item?.heroImage?.imageSource?.url}
        <!-- Unlike the homepage and top tier pages, we use a very simple two-column
       layout on desktop here. Cards should never stretch to full-width on
       desktop. -->
        <Card class="ldaf-card--size-half">
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
          <!-- Since no card is more important than another, use the default
             primary button style for all CTAs. -->
          <Button slot="footer" isLink={true} href={item.url}>
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {:else}
        <Card class="ldaf-card--size-half">
          <h3 class="usa-card__heading" slot="header">{item.title}</h3>
          <svelte:fragment slot="body">
            {#if item.subheading}
              {item.subheading}
            {/if}
          </svelte:fragment>
          <Button slot="footer" isLink={true} href={item.url}>
            <Icon src={arrowIcon} size={3} />
          </Button>
        </Card>
      {/if}
    {/each}
  </CardGroup>
{/if}

<div />

{#if imageGallery?.images.length > 0}
  {#if imageGalleryTitle}
    <h2>{imageGalleryTitle}</h2>
  {/if}

  <div>
    <!-- Display a maximum of 8 images (2 rows of 4) -->
    <!-- TODO: Enhance with a "show more" button revealing lightbox gallery -->
    {#each chunk(imageGallery.images, 4).slice(0, 2) as row}
      <div class="grid-row gallery-row">
        <!-- TODO: switch back to item.system.id for key once images are unique -->
        {#each row as item, i (i)}
          {#if item.url}
            <div class="grid-col-3 gallery-image">
              <Link href={item.url}>
                <Image
                  src={item.url}
                  sources={getSources}
                  blurhash={imageGallery.blurhashes[item.sys.id] ?? undefined}
                  alt={item?.description ?? "Hero image"}
                  width={item?.width ?? undefined}
                  height={item?.height ?? undefined}
                  sizeType="col-9"
                  loading="eager"
                />
              </Link>
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
{/if}

{#if contactInfoCollection?.items && contactInfoCollection.items.length > 0}
  <ContactCard address={undefined} contacts={contactInfoCollection.items} class="margin-top-6" />
{/if}

{#if additionalResources}
  <h2>Related links</h2>
  <ContentfulRichText
    document={additionalResources.json}
    links={additionalResources.links}
    imageSizeType="col-9"
  />
{/if}
