<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import {
    PUBLIC_CONTENTFUL_OAUTH_ENDPOINT,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";

  type $$Props = HTMLAnchorAttributes;

  const baseURL = PUBLIC_CONTENTFUL_OAUTH_ENDPOINT;

  let loginParams: Record<string, string> = {},
    loginLink = "";

  if (browser) {
    // we're using page.subscribe instead of just $page because of a weird error that only happens
    // in tests
    page.subscribe(($page) => {
      loginParams = {
        response_type: "token",
        scope: "content_management_read",
        client_id: PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
        redirect_uri: encodeURIComponent(PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI),
        state: encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash),
      };
      loginLink = `${baseURL}?${Object.entries(loginParams)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`;
    });
  }
</script>

<a class="login-link" href={loginLink} {...$$props}>
  <slot>Login</slot>
</a>
