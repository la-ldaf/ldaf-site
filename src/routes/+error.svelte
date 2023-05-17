<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="usa-section usa-prose grid-container">
  {#if $page.error}
    <h1>{$page.error.title || $page.status}</h1>
    <p>{$page.error.message}</p>
  {/if}
</div>
