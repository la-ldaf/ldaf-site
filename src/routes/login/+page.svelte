<script lang="ts">
  import type { SubmitFunction } from "@sveltejs/kit";
  import { applyAction, enhance } from "$app/forms";
  import { getCurrentUserStore } from "$lib/context/currentUser";

  export let form;
  const currentUser = getCurrentUserStore();

  const enhanceLogoutForm: SubmitFunction<{ success: boolean }> = () =>
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
</script>

<div class="grid-container">
  {#if form?.success}
    {#if form.currentUser}
      <p>Successfully logged in!</p>
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

    <h2>Log in with Contentful personal access token</h2>
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
