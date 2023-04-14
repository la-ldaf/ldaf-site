<script lang="ts">
  import type { NavItemType } from "./types";

  import NavItem from "./NavItem.svelte";

  export let items: NavItemType[] = [];

  let expandedIndex: number | undefined = undefined;
</script>

<ul class="usa-nav__primary usa-accordion">
  {#each items as item, i (item.id)}
    {@const { name, ...restProps } = item}
    <li class="usa-nav__primary-item">
      <NavItem
        expanded={i === expandedIndex}
        on:toggle={() => (expandedIndex = expandedIndex === i ? undefined : i)}
        on:close={() => expandedIndex === i && (expandedIndex = undefined)}
        {...restProps}
      >
        {name}
      </NavItem>
    </li>
  {/each}
</ul>
