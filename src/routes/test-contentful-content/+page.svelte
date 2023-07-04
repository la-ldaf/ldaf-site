<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  export let data;
</script>

<ContentfulRichText document={data.document} links={data.links} blurhashes={data.blurhashes} />
