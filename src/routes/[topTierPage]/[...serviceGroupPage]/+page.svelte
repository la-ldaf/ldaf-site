<script lang="ts">
  export let data;
  $: ({ pageMetadata } = data);
</script>

<div class="usa-section grid-container">
  <main id="main-content">
    <h1>{pageMetadata?.title}</h1>
    <p>This is a stub for a Service Group page!</p>
  </main>
</div>
