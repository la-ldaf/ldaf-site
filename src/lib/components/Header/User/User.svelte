<script lang="ts">
  import { getContext } from "svelte";
  import "./User.scss";
  import logout from "$lib/actions/logout";
  import { browser } from "$app/environment";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import LoginLink from "$lib/components/LoginLink/LoginLink.svelte";

  const currentUser = getContext<CurrentUser | undefined>(currentUserKey);
</script>

<div class="user">
  {#if currentUser}
    <span>Welcome, {currentUser.name}!</span>
    <a class="login-link" href="#logout" on:click={logout}>Logout</a>
  {:else}
    <LoginLink>Login</LoginLink>
  {/if}
</div>
