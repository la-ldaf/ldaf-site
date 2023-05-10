<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  export let data;
  const { content } = data;
</script>

<ContentfulRichText {content} />
