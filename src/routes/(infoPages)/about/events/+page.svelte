<script lang="ts">
  export let data;
  $: ({ pageMetadata } = data);
</script>

<h1>{pageMetadata?.title}</h1>
<p>This is a stub for the Events Aggregation page!</p>
