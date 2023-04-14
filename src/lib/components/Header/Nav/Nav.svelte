<script lang="ts">
  import type { NavItemType } from "./types";

  import NavItem from "./NavItem.svelte";

  export let items: NavItemType[] = [];

  // The index of the item that is currently expanded.
  let expandedI: number | undefined = undefined;
</script>

<ul class="usa-nav__primary usa-accordion">
  {#each items as item, i (item.id)}
    {@const { name, ...restProps } = item}
    <li class="usa-nav__primary-item">
      <NavItem
        expanded={i === expandedI}
        on:toggle={() => (expandedI = expandedI === i ? undefined : i)}
        on:close={() => expandedI === i && (expandedI = undefined)}
        {...restProps}
      >
        {name}
      </NavItem>
    </li>
  {/each}
</ul>
