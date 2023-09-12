<script lang="ts">
  import Link from "$lib/components/Link";
  export let data;
  $: ({ pageMetadata, taggedPages } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{pageMetadata?.title}</h1>
    <ul>
      {#each taggedPages as page (page?.sys.id)}
        {#if page?.url && page?.title}
          <li><Link href={page.url}>{page.title}</Link></li>
        {/if}
      {/each}
    </ul>
  </main>
</div>
