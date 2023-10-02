<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText/ContentfulRichText.svelte";
  import Link from "$lib/components/Link";
  export let data;
  $: ({ aggregationPage, taggedServicesByParent } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{aggregationPage?.title}</h1>
    {#if aggregationPage?.subhead}
      <p class="usa-intro">{aggregationPage.subhead}</p>
    {/if}
    {#if aggregationPage?.body}
      <ContentfulRichText document={aggregationPage.body.json} />
    {/if}
    {#if taggedServicesByParent}
      <ul>
        {#each Object.keys(taggedServicesByParent).sort() as pageName}
          <li>
            {pageName}
            <ul>
              {#each taggedServicesByParent[pageName] as service (service?.id)}
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
