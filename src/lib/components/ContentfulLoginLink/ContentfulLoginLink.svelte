<script lang="ts">
  import type { ComponentProps } from "svelte";
  import {
    PUBLIC_CONTENTFUL_OAUTH_ENDPOINT,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI,
  } from "$env/static/public";
  import { page } from "$app/stores";
  import Link from "$lib/components/Link";

  type $$Props = Omit<ComponentProps<Link>, "href">;

  const baseURL = PUBLIC_CONTENTFUL_OAUTH_ENDPOINT;

  const defaultLoginParams = {
    response_type: "token",
    scope: "content_management_read",
    client_id: PUBLIC_CONTENTFUL_OAUTH_CLIENT_ID,
    redirect_uri: encodeURIComponent(PUBLIC_CONTENTFUL_OAUTH_CLIENT_REDIRECT_URI),
  };

  $: loginParams = {
    ...defaultLoginParams,
    state: encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash),
  };

  $: loginLink = `${baseURL}?${Object.entries(loginParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;

  let className: string | undefined = undefined;
  export { className as class };
</script>

<Link class={className} href={loginLink} {...$$restProps}>
  <slot>Login</slot>
</Link>
