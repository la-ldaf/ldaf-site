<script lang="ts">
  import { enhance } from "$app/forms";
  import { getCurrentUserStore } from "$lib/context/currentUser";

  export let form;

  const currentUser = getCurrentUserStore();

  $: if (form?.success) currentUser.set(undefined);
</script>

<div class="grid-container">
  <h1>Logout</h1>
  {#if $currentUser}
    {#if form?.success}
      <p>Successfully logged out!</p>
    {:else}
      <p>You are logged in as {$currentUser.name}.</p>
      <form method="POST" use:enhance>
        <input type="submit" value="Logout" />
      </form>
    {/if}
  {:else}
    <p>You are not logged in!</p>
  {/if}
</div>
