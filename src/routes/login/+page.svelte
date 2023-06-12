<script lang="ts">
  import { getContext } from "svelte";
  import type { ActionData } from "./$types";
  import { page } from "$app/stores";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import ContentfulLoginLink from "$lib/components/ContentfulLoginLink";
  import timeout from "$lib/util/timeout";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  export let form: ActionData;
  const currentUser = getContext<CurrentUser | undefined>(currentUserKey);

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
  {#if form?.success}
    <p>Successfully logged in!</p>
    <p>Welcome {form.currentUser.name}!</p>
    {#if redirectURL}
      <p>Redirecting you back to <a href={redirectURL}>{redirectURL}</a>...</p>
    {/if}
  {:else if currentUser}
    <p>Welcome {currentUser.name}!</p>
    <p>You are already logged in.</p>
    <form method="POST" action="/logout">
      <input type="Submit" value="Logout" />
    </form>
  {:else}
    <h1>Login</h1>

    <h2>Log in with Contentful</h2>
    <ContentfulLoginLink>Log in</ContentfulLoginLink>

    <h2>Log in with personal access token</h2>
    <form method="POST">
      <label>
        Token
        <input name="token" type="text" />
      </label>
      <input type="submit" />
    </form>
  {/if}
</div>
