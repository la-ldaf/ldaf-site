<script lang="ts">
  import { page } from "$app/stores";
  $: ({ status, error } = $page);
</script>

<svelte:head>
  <meta name="robots" content="noindex nofollow" />
</svelte:head>

<!-- To reduce further error possibilities, we use as much plain HTML here as possible. -->
{#if error}
  <div class="usa-section usa-prose grid-container">
    {#if status === 404}
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-3">
          <img
            src="/404.png"
            class="ldaf-404-img margin-bottom-3"
            alt="A goat with its tongue hanging out."
          />
        </div>
        <div class="tablet:grid-col-9">
          <h1 class="margin-top-0">Uh oh. Page not found.</h1>
          <p class="usa-intro line-height-sans-3 margin-y-0">
            This is baaaaad. We hope this won't get your goat, but this page doesn't exist.
          </p>
          <p>
            It might have been removed, had its name changed, or is otherwise unavailable. If you
            typed the URL directly, check your spelling and capitalization. Our URLs look like this: <strong
              >https://www.ldaf.la.gov/example-page</strong
            >
          </p>
          <div class="margin-y-4">
            <a href="/" class="usa-button usa-link">Visit homepage</a>
            <a href="/about/contact" class="usa-button usa-button--outline usa-link">Contact us</a>
          </div>
          <p>Error code: <code>{status}</code></p>
        </div>
      </div>
    {:else}
      <h1>{error.title || status}</h1>
      <p>{error.message}</p>
    {/if}
  </div>
{/if}

<style>
  .ldaf-404-img {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 215px;
  }
</style>
