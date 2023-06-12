<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { page } from "$app/stores";
  import logout from "$lib/actions/logout";

  type $$Props = Omit<HTMLAnchorAttributes, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: logoutLinkLocation = `/logout?state=${encodedState}`;
</script>

<a
  href={logoutLinkLocation}
  on:click={(e) => {
    e.preventDefault();
    logout();
  }}
  {...$$props}><slot>Logout</slot></a
>
