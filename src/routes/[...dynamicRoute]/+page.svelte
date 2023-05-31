<script lang="ts">
  export let data;
  $: ({ text } = data);
</script>

<section class="usa-section">
  <div class="grid-container">
    This is a stub for the <strong>{text}</strong> page!
  </div>
</section>
