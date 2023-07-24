<script lang="ts">
  import { url as expandedIcon } from "$icons/expand_more";
  import { url as collapsedIcon } from "$icons/navigate_next";
  import "./SideNav.scss";

  import Icon from "$lib/components/Icon";
  import Link from "$lib/components/Link";

  import type SideNavItem from "./types";

  export let currentPath: string | null,
    title: string,
    link: string,
    children: SideNavItem[] | undefined = undefined;

  $: partOfCurrentPath = !!currentPath?.startsWith(link);
</script>

<li class="usa-sidenav__item ldaf-sidenav-item">
  <Link class={partOfCurrentPath ? "usa-current" : ""} href={link}>
    <span class="ldaf-sidenav-link-text">{title}</span>
    {#if children && children.length > 0}
      <div class="ldaf-sidenav-icon-container">
        {#if partOfCurrentPath}
          <Icon src={expandedIcon} size={3} />
        {:else}
          <Icon src={collapsedIcon} size={3} />
        {/if}
      </div>
    {/if}
  </Link>
  {#if partOfCurrentPath && children && children.length > 0}
    <ul class="usa-sidenav__sublist">
      {#each children as { id, ...child } (id)}
        <svelte:self {...child} {currentPath} />
      {/each}
    </ul>
  {/if}
</li>
