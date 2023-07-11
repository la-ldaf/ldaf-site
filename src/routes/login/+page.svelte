<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import ContentfulLoginLink from "$lib/components/ContentfulLoginLink";
  import timeout from "$lib/util/timeout";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  export let form;
  const currentUser = getContext<Writable<CurrentUser | undefined>>(currentUserKey);

  let redirectPromise: Promise<void> | undefined;
  $: redirectURL = $page.url.searchParams.get("state");
  $: if (form?.success && form?.currentUser) currentUser.set(form.currentUser);
  $: if (browser && form?.success && redirectURL && !redirectPromise) {
    redirectPromise = (async () => {
      await timeout(2500);
      await goto(redirectURL, { replaceState: true, invalidateAll: true });
    })();
  }
</script>

<div class="grid-container">
  {#if form?.success}
    <p>Successfully logged in!</p>
    {#if form.currentUser?.name}
      <p>Welcome {form.currentUser.name}!</p>
    {/if}
    {#if redirectURL}
      <p>Redirecting you back to <a href={redirectURL}>{redirectURL}</a>...</p>
    {/if}
  {:else if $currentUser}
    <p>Welcome {$currentUser.name}!</p>
    <p>You are already logged in.</p>
    <form method="POST" action="/logout" use:enhance>
      <input type="Submit" value="Logout" />
    </form>
  {:else}
    <h1>Login</h1>

    <ContentfulLoginLink><h2>Click here to log in with Contentful</h2></ContentfulLoginLink>

    <h2>Log in with personal access token</h2>
    <form method="POST">
      <label>
        Token
        <input name="token" type="text" />
      </label>
      <input type="submit" value="Login" />
    </form>

    {#if form?.success === false}
      <p>
        {form?.message}
      </p>
    {/if}
  {/if}
</div>
