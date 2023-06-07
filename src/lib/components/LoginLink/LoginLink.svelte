<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import {
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { page } from "$app/stores";

  type $$Props = HTMLAnchorAttributes;

  const baseURL = "https://be.contentful.com/oauth/authorize";
  $: loginParams = {
    response_type: "token",
    scope: "content_management_read",
    client_id: PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    redirect_uri: encodeURIComponent(PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI),
    state: encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash),
  };
  $: loginLink = `${baseURL}?${Object.entries(loginParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;
</script>

<a class="login-link" href={loginLink} {...$$props}>
  <slot>Login</slot>
</a>
