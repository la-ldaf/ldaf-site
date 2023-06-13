<script lang="ts">
  import { invalidateAll } from "$app/navigation";
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const dispatch = createEventDispatcher();

  type $$Props = Omit<HTMLAnchorAttributes, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: loginLinkLocation = `/login?state=${encodedState}`;
</script>

<a
  href={loginLinkLocation}
  on:click={() => {
    invalidateAll();
    dispatch("click");
  }}
  {...$$props}><slot>Login</slot></a
>
