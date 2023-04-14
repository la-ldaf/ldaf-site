<script lang="ts">
  import type { NavItemProps, NavLinkType } from "./types";

  import NavLink from "./NavLink.svelte";
  import NavMenu from "./NavMenu.svelte";

  type $$Props = NavItemProps;

  export let id = "";
  export let link: string | undefined = undefined;
  export let current = false;
  export let columns = 0;
  export let children: NavLinkType[] = [];
  export let expanded = false;
</script>

{#if children.length > 0}
  <NavMenu {id} {current} {children} {columns} {expanded} on:toggle on:close><slot /></NavMenu>
{:else}
  <NavLink href={link} {current}><slot /></NavLink>
{/if}
