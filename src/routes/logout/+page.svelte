<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import timeout from "$lib/util/timeout";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";

  export let form;

  const currentUser = getContext<Writable<CurrentUser | undefined>>(currentUserKey);

  $: if (form?.success) currentUser.set(undefined);

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
  {#if $currentUser}
    {#if form?.success}
      <p>Successfully logged out!</p>
      {#if redirectURL}
        <p>Redirecting you back to <a href={redirectURL}>{redirectURL}</a>...</p>
      {/if}
    {:else}
      <form method="POST" use:enhance>
        <input type="submit" value="Logout" />
      </form>
    {/if}
  {:else}
    <p>You are not logged in!</p>
  {/if}
</div>
