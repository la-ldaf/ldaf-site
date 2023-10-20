<script lang="ts">
  import { enhance } from "$app/forms";
  import { getCurrentUserStore } from "$lib/context/currentUser";

  export let form;
  const currentUser = getCurrentUserStore();
</script>

<div class="grid-container">
  {#if form?.success}
    <p>Successfully logged in!</p>
    {#if form.currentUser?.name}
      <p>Welcome {form.currentUser.name}!</p>
    {/if}
  {:else if $currentUser}
    <p>Welcome {$currentUser.name}!</p>
    <p>You are already logged in.</p>
    <form method="POST" action="/logout" use:enhance>
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
