<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { page } from "$app/stores";
  import logout from "$lib/actions/logout";
  import { createEventDispatcher, getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import type { PublicLogger } from "$lib/logger";

  const logger = getContext<PublicLogger>("logger");
  const currentUser = getContext<Writable<CurrentUser | undefined>>(currentUserKey);

  const dispatch = createEventDispatcher();

  type $$Props = Omit<HTMLAnchorAttributes, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: logoutLinkLocation = `/logout?state=${encodedState}`;
</script>

<a
  href={logoutLinkLocation}
  on:click={(e) => {
    dispatch("click", e);
    e.preventDefault();
    logout && logout({ currentUser, fetch, logger });
  }}
  {...$$props}><slot>Logout</slot></a
>
