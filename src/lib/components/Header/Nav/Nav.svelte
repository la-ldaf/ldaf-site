<script lang="ts">
  import type { ComponentProps } from "svelte";
  import NavItem from "./NavItem.svelte";

  export let items: ComponentProps<NavItem>[] = [];
</script>

<ul class="usa-nav__primary usa-accordion">
  {#each items as item (item.id)}
    <li class="usa-nav__primary-item">
      <NavItem {...item}>{item.name}</NavItem>
    </li>
  {/each}
</ul>
