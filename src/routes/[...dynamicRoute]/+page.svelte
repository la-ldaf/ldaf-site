<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  $: ({ text } = data);
</script>

<section class="usa-section">
  <div class="grid-container">
    This is a stub for the <strong>{text}</strong> page!
  </div>
</section>
