<script lang="ts" context="module">
  import type { ResourceLinks } from "./types";
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
