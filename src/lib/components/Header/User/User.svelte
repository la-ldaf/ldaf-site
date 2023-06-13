<script lang="ts">
  import { getContext } from "svelte";
  import "./User.scss";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import LoginLink from "$lib/components/LoginLink";
  import LogoutLink from "$lib/components/LogoutLink";
  import type { Writable } from "svelte/store";

  const currentUser = getContext<Writable<CurrentUser | undefined>>(currentUserKey);
</script>

<div class="user">
  {#if $currentUser}
    <span>Welcome, {$currentUser.name}!</span>
    <LogoutLink />
  {:else}
    <LoginLink />
  {/if}
</div>
