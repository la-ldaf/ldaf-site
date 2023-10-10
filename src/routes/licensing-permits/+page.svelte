<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import Link from "$lib/components/Link";
  export let data;
  $: ({ pageMetadata, aggregationPage, serviceGroups } = data);
  $: breadcrumbs = pageMetadata?.breadcrumbs ?? [];
</script>

<div class="grid-container margin-bottom-2">
  <Breadcrumbs path={breadcrumbs} />
  <main class="usa-prose" id="main-content">
    <h1>{aggregationPage?.title}</h1>
    {#if aggregationPage?.subhead}
      <p class="usa-intro">{aggregationPage.subhead}</p>
    {/if}
    {#if aggregationPage?.body}
      <ContentfulRichText document={aggregationPage.body.json} links={aggregationPage.body.links} />
    {/if}
    {#if serviceGroups}
      {#each serviceGroups as serviceGroup (serviceGroup.id)}
        <h2>{serviceGroup.title}</h2>
        {#if serviceGroup?.subheading}
          <p>{serviceGroup.subheading}</p>
        {/if}
        <ul>
          <li><Link href={serviceGroup.url}>About {serviceGroup.title}</Link></li>
          {#each serviceGroup.services as service (service?.id)}
            <li>
              <Link href={service?.url}>{service?.title}</Link>
            </li>
          {/each}
        </ul>
      {/each}
    {/if}
  </main>
</div>
