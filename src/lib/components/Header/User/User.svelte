<script lang="ts">
  import { onMount } from "svelte";
  import "./User.scss";
  import {
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { page } from "$app/stores";
  import userInfo from "$lib/stores/userInfo";
  import logout from "$lib/actions/logout";
  import { browser } from "$app/environment";

  let mounted = false;
  onMount(() => (mounted = true));

  const baseURL = "https://be.contentful.com/oauth/authorize";
  $: loginParams = {
    response_type: "token",
    scope: "content_management",
    client_id: PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    redirect_uri: encodeURIComponent(PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI),
    state: encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash),
  };
  $: loginLink = `${baseURL}?${Object.entries(loginParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;
</script>

<div class="user">
  {#if $userInfo}
    <span>Welcome, {$userInfo.name}!</span>
  {/if}
  {#if browser && $userInfo}
    <a class="login-link" href="#login" on:click={logout}>Logout</a>
  {:else if browser && mounted}
    <a class="login-link" href={loginLink}>Login</a>
  {/if}
</div>
