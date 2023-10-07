<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText/ContentfulRichText.svelte";
  import Link from "$lib/components/Link";
  export let data;
  $: ({ aggregationPage, serviceGroupMap } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{aggregationPage?.title}</h1>
    {#if aggregationPage?.subhead}
      <p class="usa-intro">{aggregationPage.subhead}</p>
    {/if}
    {#if aggregationPage?.body}
      <ContentfulRichText document={aggregationPage.body.json} links={aggregationPage.body.links} />
    {/if}
    {#if serviceGroupMap}
      <ul>
        {#each Array.from( serviceGroupMap, ([id, serviceGroup]) => ({ id, ...serviceGroup }), ) as serviceGroup (serviceGroup.id)}
          <li>
            <Link href={serviceGroup.url}>
              {serviceGroup.title}
            </Link>
            {#if serviceGroup?.subheading}
              | {serviceGroup.subheading}
            {/if}
            <ul>
              {#each serviceGroup.services as service (service?.id)}
                <li>
                  <Link href={service?.url}>{service?.title}</Link>
                </li>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    {/if}
  </main>
</div>
