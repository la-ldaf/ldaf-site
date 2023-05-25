<script lang="ts">
  import { onMount } from "svelte";
  import "./User.scss";
  import userInfo from "$lib/stores/userInfo";
  import logout from "$lib/actions/logout";
  import { browser } from "$app/environment";
  import LoginLink from "$lib/components/LoginLink/LoginLink.svelte";

  let mounted = false;
  onMount(() => (mounted = true));
</script>

<div class="user">
  {#if $userInfo}
    <span>Welcome, {$userInfo.name}!</span>
  {/if}
  {#if browser && $userInfo}
    <a class="login-link" href="#logout" on:click={logout}>Logout</a>
  {:else if browser && mounted}
    <LoginLink>Login</LoginLink>
  {/if}
</div>
