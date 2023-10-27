<script lang="ts">
  import "./User.scss";
  import { getCurrentUserStore } from "$lib/context/currentUser";
  import LoginLink from "$lib/components/LoginLink";
  import LogoutLink from "$lib/components/LogoutLink";

  const currentUser = getCurrentUserStore();
</script>

<div class="user">
  {#if $currentUser}
    <span>Welcome, {$currentUser.name}!</span>
    <LogoutLink />
  {:else}
    <LoginLink />
  {/if}
</div>
