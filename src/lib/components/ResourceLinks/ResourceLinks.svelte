<script lang="ts" context="module">
  export type ResourceLink = {
    title: string;
    href: string;
    description?: string;
  };

  export type ResourceLinks = ResourceLink[];
</script>

<script lang="ts">
  import "./ResourceLinks.scss";
  import Link from "$lib/components/Link";
  export let links: ResourceLinks;
</script>

<ul class="ldaf-resource-links">
  {#each links as { title, description, href }}
    <li class="ldaf-resource-links__list-item">
      <Link {href} class="ldaf-resource-links__link">{title}</Link>
      <p class="ldaf-resource-links__description">{description}</p>
    </li>
  {/each}
</ul>
