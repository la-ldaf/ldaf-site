<script lang="ts">
  export let data;
  $: ({ pageMetadata } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{pageMetadata?.title}</h1>
    <p>This is a stub for the Licensing and Permits Aggregation page!</p>
  </main>
</div>
