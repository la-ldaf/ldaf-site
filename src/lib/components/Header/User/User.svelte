<script lang="ts">
  import "./User.scss";
  import {
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { page } from "$app/stores";
  import user from "$lib/stores/user";

  $: loginLink = `https://be.contentful.com/oauth/authorize?response_type=token&client_id=${PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI
  )}&scope=content_management_manage&state=${encodeURIComponent(
    $page.url.pathname + $page.url.search + $page.url.hash
  )}`;
</script>

<div class="user">
  {#if $user}
    <span
      >Welcome, {$user.name}!
      <a
        href="#"
        on:click={(e) => {
          e.preventDefault();
          localStorage?.removeItem("ldaf-user");
          document.cookie = "ldafUserToken=;";
          user?.set(undefined);
        }}>Logout</a
      ></span
    >
  {:else}
    <a class="login-link" href={loginLink}>Login</a>
  {/if}
</div>
