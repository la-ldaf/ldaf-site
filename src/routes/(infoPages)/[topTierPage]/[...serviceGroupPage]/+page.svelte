<script lang="ts">
  import "../page.scss";
  import { getSources } from "$lib/imageServices/contentful";
  import Accordion, { AccordionItem } from "$lib/components/Accordion";
  import Button from "$lib/components/Button";
  import Card from "$lib/components/Card";
  import ContactCard from "$lib/components/ContactCard";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Icon from "$lib/components/Icon";
  import { url as arrowIcon } from "$icons/arrow_forward";
  import Image from "$lib/components/Image";
  import { afterUpdate } from "svelte";

  export let data;
  $: ({
    serviceGroup: {
      title,
      subheading,
      description,
      heroImage,
      serviceListName,
      contactInfoCollection,
      additionalResources,
    },
    childServiceEntries,
    childServiceGroups,
  } = data);

  // $: console.log(data);

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
  <ul class="service-group-list">
    {#each childServiceGroups as item}
      <Card class="service-group-card">
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
    {/each}
  </ul>
{/if}

<div />

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
