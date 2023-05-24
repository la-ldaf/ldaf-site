<script lang="ts">
  import { afterNavigate, invalidate } from "$app/navigation";
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const dispatch = createEventDispatcher();

  type $$Props = Omit<HTMLAnchorAttributes, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: loginLinkLocation = `/login?state=${encodedState}`;

  afterNavigate(({ from }) => from && invalidate("app:previewAuthenticationError"));
</script>

<a href={loginLinkLocation} on:click={() => dispatch("click")} {...$$props}><slot>Login</slot></a>
