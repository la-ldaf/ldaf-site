<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { PublicLogger } from "$lib/logger/public";

  import { page } from "$app/stores";
  import logout from "$lib/actions/logout";
  import { createEventDispatcher, getContext, type ComponentProps } from "svelte";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import Link from "$lib/components/Link";

  const logger = getContext<PublicLogger>("logger");
  const currentUser = getContext<Writable<CurrentUser | undefined>>(currentUserKey);

  const dispatch = createEventDispatcher();

  type $$Props = Omit<ComponentProps<Link>, "href">;

  $: encodedState = encodeURIComponent($page.url.pathname + $page.url.search + $page.url.hash);
  $: logoutLinkLocation = `/logout?state=${encodedState}`;
</script>

<Link
  href={logoutLinkLocation}
  on:click={(e) => {
    e.preventDefault(); // we can't use on:click|preventDefault with custom elements
    if (!dispatch("click", e, { cancelable: true }) || !logout) return;
    logout({ currentUser, fetch, logger });
  }}
  {...$$props}><slot>Logout</slot></Link
>
