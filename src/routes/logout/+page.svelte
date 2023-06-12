<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import timeout from "$lib/util/timeout";

  export let form;

  let redirectPromise: Promise<void> | undefined;
  $: redirectURL = $page.url.searchParams.get("state");
  $: if (browser && form?.success && redirectURL && !redirectPromise) {
    redirectPromise = (async () => {
      await timeout(2500);
      await goto(redirectURL, { replaceState: true });
    })();
  }
</script>

<div class="grid-container">
  <h1>Logout</h1>
  {#if form?.success}
    <p>Successfully logged out!</p>
    {#if redirectURL}
      <p>Redirecting you back to <a href={redirectURL}>{redirectURL}</a>...</p>
    {/if}
  {:else}
    <form method="POST">
      <input type="submit" value="Logout" />
    </form>
  {/if}
</div>
