<script lang="ts">
  import Link from "$lib/components/Link";
  export let data;
  $: ({ pageMetadata, taggedServicesByParent } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{pageMetadata?.title}</h1>
    <ul>
      {#each Object.keys(taggedServicesByParent) as pageName}
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
  </main>
</div>
