<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import {
    createClient as createContentfulManagementClient,
    type UserProps,
  } from "contentful-management";

  let user: UserProps | undefined;

  const handleHash = async () => {
    if (!$page.url.hash) return;
    const parsed = parseHashQuery($page.url.hash);
    if (!parsed) return;
    const { access_token: accessToken } = parsed;
    if (!accessToken) return;
    const client = createContentfulManagementClient({ accessToken });
    if (!client) return;
    user = await client.getCurrentUser();
    console.log({ user });
  };

  if (browser) handleHash();
</script>

{#if user}
  <h1>Hello {user.firstName} {user.lastName}!</h1>
{:else}
  <h1>Hello unknown user!</h1>
{/if}
