<script lang="ts">
  import "./error.scss";

  import Button from "$lib/components/Button";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Image from "$lib/components/Image";
  import { getSources } from "$lib/imageServices/contentful";

  import { page } from "$app/stores";

  $: ({
    status,
    error,
    data: { errorPageContentMap },
  } = $page);
  $: errorPageContent = status && errorPageContentMap ? errorPageContentMap.get(status) : null;
  $: pageMetaTitle = `${errorPageContent?.metaTitle} | Louisiana Department of Agriculture and Forestry`;
</script>

<svelte:head>
  <meta name="robots" content="noindex nofollow" />
  <title>{pageMetaTitle}</title>
</svelte:head>

{#if error}
  <div class="usa-section usa-prose grid-container">
    {#if errorPageContent}
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-3">
          {#if errorPageContent?.image?.url}
            {@const {
              image: { url, blurhash, description },
            } = errorPageContent}
            <Image
              class="ldaf-error-img margin-bottom-3"
              src={url}
              alt={description}
              {blurhash}
              height={215}
              width={215}
              sources={getSources}
              loading="eager"
            />
          {/if}
        </div>
        <div class="tablet:grid-col-9">
          <h1 class="margin-top-0">{errorPageContent.heading}</h1>
          <!-- subhead is the only optional field -->
          {#if errorPageContent?.subhead}
            <p class="usa-intro line-height-sans-3 margin-y-0">
              {errorPageContent.subhead}
            </p>
          {/if}
          <ContentfulRichText
            document={errorPageContent.body.json}
            links={errorPageContent.body.links}
          />
          <div class="margin-y-3">
            <Button href="/" isLink={true} class="margin-y-1">Visit homepage</Button>
            <Button href="/about/contact" isLink={true} variant="outline" class="margin-y-1"
              >Contact us</Button
            >
          </div>
          <p>Error code: <code>{status}</code></p>
        </div>
      </div>
    {:else}
      <h1>{error.title || status}</h1>
      <p>{error.message}</p>
    {/if}
  </div>
{/if}
