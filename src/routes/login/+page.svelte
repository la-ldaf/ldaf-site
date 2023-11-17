<script lang="ts">
  import type { SubmitFunction } from "@sveltejs/kit";
  import { applyAction, enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { getCurrentUserStore } from "$lib/context/currentUser";
  import timeout from "$lib/util/timeout";
  import ContentfulLoginLink from "$lib/components/ContentfulLoginLink/ContentfulLoginLink.svelte";

  export let form;
  const currentUser = getCurrentUserStore();

  const enhanceLogoutForm: SubmitFunction<{ success: boolean }> =
    () =>
    async ({ result, update }) => {
      if (result.type === "success" && result.data?.success) {
        await applyAction({
          type: "success",
          status: result.status,
          data: { success: true, currentUser: undefined },
        });
        currentUser.set(undefined);
      }
      await update();
    };

  $: if (form?.success) currentUser.set(form?.currentUser);

  let redirectPromise: Promise<void> | undefined;
  $: redirectURL = $page.url.searchParams.get("state");
  $: if (form?.success && form?.currentUser) currentUser.set(form.currentUser);
  $: if (browser && form?.success && redirectURL && !redirectPromise) {
    redirectPromise = (async () => {
      await timeout(500);
      await goto(redirectURL, { replaceState: true, invalidateAll: true });
    })();
  }
</script>

<div class="grid-container">
  {#if form?.success}
    {#if form.currentUser}
      <p>Successfully logged in!</p>
      {#if redirectURL}
        <p>Please wait to be redirected to the previous page.</p>
        <p><a href={redirectURL}>Click here</a> to return to the previous page if you are not automatically redirected.</p>
      {/if}
    {:else}
      <p>Successfully logged out!</p>
    {/if}
  {/if}
  {#if $currentUser}
    <p>Welcome {$currentUser.name}!</p>
    <form method="POST" action="/logout" use:enhance={enhanceLogoutForm}>
      <input type="Submit" value="Logout" />
    </form>
  {:else}
    <h1>Login</h1>

    <h2>Login with Contentful account</h2>
    <ContentfulLoginLink>Click here to log in with Contentful</ContentfulLoginLink>

    <h2>Login with Contentful personal access token</h2>
    <form method="POST" use:enhance>
      <label>
        Token
        <input name="token" type="text" />
      </label>
      <input type="submit" name="login" value="Login" />
    </form>

    {#if form?.success === false}
      <p>
        {form?.message}
      </p>
    {/if}
  {/if}
</div>
