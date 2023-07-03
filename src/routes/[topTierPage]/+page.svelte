<script lang="ts">
  export let data;
  $: ({ pageMetadata } = data);
</script>

<div class="usa-section grid-container">
  <main id="main-content">
    This is a stub for the <strong>{pageMetadata?.title}</strong> Top Tier page!
  </main>
</div>
