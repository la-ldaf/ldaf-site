<script lang="ts">
  import Link from "$lib/components/Link";
  import type SideNavItemType from "./SideNavItemType";

  export let id: string,
    title: string,
    link: string,
    isCurrent: boolean,
    children: SideNavItemType[] | undefined = undefined;
</script>

<li class="usa-sidenav__item">
  <Link class={isCurrent ? "usa-current" : ""} href={link}>{title}</Link>
  {#if children}
    <ul class="usa-sidenav__sublist">
      {#each children as child}
        <svelte:self {...child} />
      {/each}
    </ul>
  {/if}
</li>
