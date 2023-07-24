<!-- This component is still incomplete. -->
<!-- TODO: https://ldaf.atlassian.net/browse/LDAF-293 -->
<script lang="ts">
  import Link from "$lib/components/Link";
  export let path: {
    id: string;
    title: string;
    link: string;
  }[];
  $: currentPage = path[path.length - 1];
  $: previousPages = path.slice(0, -1);
</script>

<nav class="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Breadcrumbs">
  <ol class="usa-breadcrumb__list">
    {#each previousPages as { id, title, link } (id)}
      <li class="usa-breadcrumb__list-item">
        <Link href={link} class="usa-breadcrumb__link"><span>{title}</span></Link>
      </li>
    {/each}
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      <span>{currentPage?.title}</span>
    </li>
  </ol>
</nav>
