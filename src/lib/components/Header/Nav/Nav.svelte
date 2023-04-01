<script lang="ts">
  import type NavItemType from "./NavItemType";

  import NavItem from "./NavItem.svelte";

  export let items: NavItemType[] = [];
</script>

<ul class="usa-nav__primary usa-accordion">
  {#each items as item (item.id)}
    {@const { name, ...restProps } = item}
    <li class="usa-nav__primary-item">
      <NavItem {...restProps}>{name}</NavItem>
    </li>
  {/each}
</ul>
