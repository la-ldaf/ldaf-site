<script lang="ts">
  export let data;
  $: ({ pageMetadata } = data);
</script>

<main id="main-content">
  <h1>{pageMetadata?.title}</h1>
  <p>This is a stub for the Boards and Commissions Aggregation page!</p>
</main>
