<script lang="ts">
  import { page } from "$app/stores";
  import logout from "$lib/actions/logout";
  import { createEventDispatcher, type ComponentProps } from "svelte";
  import Link from "$lib/components/Link";
  import { getCurrentUserStore } from "$lib/context/currentUser";

  const currentUser = getCurrentUserStore();

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
    logout({ currentUser, fetch });
  }}
  {...$$props}><slot>Logout</slot></Link
>
