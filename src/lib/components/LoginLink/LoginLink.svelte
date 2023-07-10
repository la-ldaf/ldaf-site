<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { afterNavigate, invalidate } from "$app/navigation";
  import { page } from "$app/stores";
  import Link from "$lib/components/Link";

  type $$Props = Omit<ComponentProps<Link>, "href">;

  $: existingState = $page.url.searchParams.get("state");
  $: params = existingState
    ? { state: encodeURIComponent(existingState) }
    : { state: encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash) };

  $: loginLinkLocation = `/login?${Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join("&")}`;

  afterNavigate(({ from }) => from && invalidate("app:previewAuthenticationError"));
</script>

<Link href={loginLinkLocation} on:click {...$$props}><slot>Login</slot></Link>
