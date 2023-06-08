<!-- This is currently a stubbed component for use on the Office Page. -->
<!-- TODO: https://ldaf.atlassian.net/browse/LDAF-293 -->
<script lang="ts">
  import Link from "$lib/components/Link";
  export let path: {
    id: string;
    title: string;
    link: string;
  }[];
  export let currentPageTitle: string;
</script>

<nav class="usa-breadcrumb usa-breadcrumb--wrap" aria-label="Breadcrumbs">
  <ol class="usa-breadcrumb__list">
    {#each path as { id, title, link } (id)}
      <li class="usa-breadcrumb__list-item">
        <Link href={link} class="usa-breadcrumb__link"><span>{title}</span></Link>
      </li>
    {/each}
    <li class="usa-breadcrumb__list-item usa-current" aria-current="page">
      <span>{currentPageTitle}</span>
    </li>
  </ol>
</nav>
