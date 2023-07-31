<script lang="ts">
  import Link from "$lib/components/Link";
  export let data;
  $: ({ pageMetadata } = data);
</script>

<div class="grid-container">
  <main class="margin-top-2 usa-prose" id="main-content">
    <h1>{pageMetadata?.title}</h1>
    <ul>
      <li><Link href="/land/arborists">Arborist licensing</Link></li>
      <li>
        <Link href="/business/warehousing-distribution">Commodity warehousing and distribution</Link
        >
      </li>
      <li>
        <Link href="/plants/florists">Florist and flower dealer licensing</Link>
      </li>
      <li>
        <Link href="/plants/industrial-hemp/hemp-licensing">Industrial hemp licensing</Link>
      </li>
      <li>
        <Link href="/plants/nurseries-landscaping">Nursery and landscape licensing</Link>
      </li>
      <li>
        <Link href="/plants/pesticides">Pesticide licensing and registration</Link>
      </li>
      <li>
        <Link href="/business/pest-control/pest-control-licensing"
          >Structural pest control licensing and registration</Link
        >
      </li>
      <li>
        <Link href="/business/weights-measures/weighmaster-technician-licensing"
          >Weighmaster and technician licensing</Link
        >
      </li>
    </ul>
  </main>
</div>
