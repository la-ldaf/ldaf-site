<script lang="ts">
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;
</script>

<h1>{data.newsArticle.title}</h1>
<ContentfulRichText document={data.newsArticle?.body?.json} />
