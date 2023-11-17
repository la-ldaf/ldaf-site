<script lang="ts">
  import "./User.scss";
  import { getCurrentUserStore } from "$lib/context/currentUser";
  import LogoutLink from "$lib/components/LogoutLink";
  import PreviewToggle from "$lib/components/PreviewToggle";

  const currentUser = getCurrentUserStore();
</script>

{#if $currentUser}
  <div class="user">
    <span>Welcome, {$currentUser.name}!</span>
    <LogoutLink />
  </div>
  <div>
    <PreviewToggle />
  </div>
{/if}
