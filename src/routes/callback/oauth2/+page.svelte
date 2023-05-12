<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import timeout from "$lib/util/timeout";
  import {
    createClient as createContentfulManagementClient,
    type UserProps,
  } from "contentful-management";

  let user: UserProps | undefined;

  const handleHash = async () => {
    if (!$page.url.hash) return;
    const parsed = parseHashQuery($page.url.hash);
    if (!parsed) return;
    const { access_token: accessToken, state: encodedRedirect } = parsed;
    const redirect = decodeURIComponent(encodedRedirect);
    console.log({ redirect });
    if (!accessToken) return;
    const managementClient = createContentfulManagementClient({ accessToken });
    if (!managementClient) return;
    user = await managementClient.getCurrentUser();
    console.log({ user });
    await timeout(2500);
    await goto(redirect, { replaceState: true });
  };

  if (browser) handleHash();
</script>

{#if user}
  <h1>Hello {user.firstName} {user.lastName}!</h1>
{:else}
  <h1>Hello unknown user!</h1>
{/if}
