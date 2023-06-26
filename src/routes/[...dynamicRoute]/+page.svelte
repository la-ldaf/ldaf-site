<script lang="ts">
  export let data;
  $: ({ text } = data);
</script>

<div class="usa-section grid-container">
  <main id="main-content">
    This is a stub for the <strong>{text}</strong> page!
  </main>
</div>
