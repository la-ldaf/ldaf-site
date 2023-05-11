<script lang="ts">
  import type { PageData } from "./$types";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data: PageData;
</script>

<h1>{data.entry?.fields.title}</h1>

<ContentfulRichText document={data.entry?.fields.body} />
