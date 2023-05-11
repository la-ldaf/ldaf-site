<script lang="ts">
  import type { NavItemType } from "./types";

  import { page } from "$app/stores";
  import NavItem from "./NavItem.svelte";

  export let items: NavItemType[] = [];
  export let currentID: string | undefined = undefined;

  let expandedIndex: number | undefined = undefined;

  // Update the active nav item based on the current path.
  $: currentNavItemID = items.find(
    (item) => "link" in item && item.link === $page.url.pathname
  )?.id;
</script>

<ul class="usa-nav__primary usa-accordion">
  {#each items as item, i (item.id)}
    {@const { name, ...restProps } = item}
    <li class="usa-nav__primary-item">
      <NavItem
        expanded={i === expandedIndex}
        on:toggle={() => (expandedIndex = expandedIndex === i ? undefined : i)}
        on:close={() => expandedIndex === i && (expandedIndex = undefined)}
        current={item.id === currentID}
        {...restProps}
      >
        {name}
      </NavItem>
    </li>
  {/each}
</ul>
