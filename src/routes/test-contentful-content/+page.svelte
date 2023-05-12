<script lang="ts">
  import type { PageData } from "./$types";
  import type { TestRichTextEntrySkeleton } from "./types";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import { page } from "$app/stores";
  import { user } from "$lib/stores";
  import { getClient } from "$lib/contentful-client";
  import { browser } from "$app/environment";

  export let data: PageData;

  let entry = data.entry;
  let loading = false;

  const failLoading = (message: string) => {
    loading = false;
    console.error(message);
  };

  const loadPreviewEntry = async () => {
    loading = true;
    if (!entry) return failLoading("cannot load preview of entry that doesn't exist");
    if (!$user) return failLoading("cannot load preview when not logged in");
    const client = getClient({ token: $user.token, preview: true });
    if (!client) return failLoading("failed to create contentful preview client");
    const previewEntry = await client.getEntry<TestRichTextEntrySkeleton>(entry.sys.id);
    if (!previewEntry) return failLoading("failed to fetch preview entry");
    console.log("loaded preview entry!");
    loading = false;
    entry = previewEntry;
  };

  if (browser && $page.url.searchParams.has("preview")) {
    if ($user) {
      loadPreviewEntry();
    } else {
      console.error("you must log in to preview the entry!");
    }
  }
</script>

<h1>{entry?.fields.title}</h1>

{#if loading}
  <div>LOADING...</div>
{:else}
  <ContentfulRichText document={entry?.fields.body} />
{/if}
