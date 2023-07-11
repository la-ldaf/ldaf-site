<!-- This component is still incomplete. -->
<!-- TODO: https://ldaf.atlassian.net/browse/LDAF-293 -->
<script lang="ts">
  import Link from "$lib/components/Link";
  export let path: {
    id: string;
    title: string;
    link: string;
  }[];
  $: lastElement = path[path.length - 1];
  $: currentPageTitle = lastElement?.title;
</script>

<nav class="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Breadcrumbs">
  <ol class="usa-breadcrumb__list">
    {#each path as { id, title, link }, index (id)}
      {#if index < path.length - 1}
        <li class="usa-breadcrumb__list-item">
          <Link href={link} class="usa-breadcrumb__link"><span>{title}</span></Link>
        </li>
      {/if}
    {/each}
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      <span>{currentPageTitle}</span>
    </li>
  </ol>
</nav>
