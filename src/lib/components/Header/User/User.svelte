<script lang="ts">
  import "./User.scss";
  import {
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { page } from "$app/stores";
  import userInfo from "$lib/stores/userInfo";
  import logout from "$lib/actions/logout";

  $: loginLink = `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI
  )}&scope=content_management_manage&state=${encodeURIComponent(
    $page.url.pathname + $page.url.search + $page.url.hash
  )}`;
</script>

<div class="user">
  {#if $userInfo}
    <span
      >Welcome, {$userInfo.name}!
      <a href="#" on:click={logout}>Logout</a></span
    >
  {:else}
    <a class="login-link" href={loginLink}>Login</a>
  {/if}
</div>
