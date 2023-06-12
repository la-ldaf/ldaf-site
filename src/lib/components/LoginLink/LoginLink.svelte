<script lang="ts">
  import { page } from "$app/stores";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type $$Props = Omit<HTMLAnchorAttributes, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: loginLinkLocation = `/login?state=${encodedState}`;
</script>

<a href={loginLinkLocation} {...$$props}><slot>Login</slot></a>
