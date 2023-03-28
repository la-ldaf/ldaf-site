<script lang="ts">
  import "./Nav.scss";
  import type { NavItemType } from "./NavItem.svelte";
  import NavItem from "./NavItem.svelte";

  export let items: NavItemType[] = [];
</script>

<nav class="usa-nav">
  <ul class="usa-nav__primary usa-accordion">
    {#each items as { id, link, isCurrent, children, name } (id)}
      <li class="usa-nav__primary-item">
        <NavItem {id} {link} {isCurrent} {children}>{name}</NavItem>
      </li>
    {/each}
  </ul>
</nav>
