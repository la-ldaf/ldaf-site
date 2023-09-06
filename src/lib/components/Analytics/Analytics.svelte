<script lang="ts">
  import { PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID } from "$env/static/public";

  export let isProd: boolean;

  // NOTE: This is slightly modified from Google's boilerplate; we set
  //   `window.gtag` instead of just `gtag` to ensure it's available in the
  //    global scope in the main thread.
  $: googleAnalyticsSnippet = `
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag(
      "config",
      "${PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}",
      ${isProd ? "{}" : "{ debug_mode: true }"}
    );
  `;

  let googleAnalyticsScriptElement: HTMLScriptElement;
  $: if (googleAnalyticsScriptElement) {
    googleAnalyticsScriptElement.textContent = googleAnalyticsSnippet;
  }
</script>

{#if PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}
  <script
    type="text/partytown"
    src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
  ></script>
  <script bind:this={googleAnalyticsScriptElement} type="text/partytown"></script>
{/if}
