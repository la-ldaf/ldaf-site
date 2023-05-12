<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { user, managementClient } from "$lib/stores";
  import { goto } from "$app/navigation";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import timeout from "$lib/util/timeout";
  import { createClient as createContentfulManagementClient } from "contentful-management";

  let redirect: string | undefined = undefined;

  const handleHash = async () => {
    if (!$page.url.hash) return;
    const parsed = parseHashQuery($page.url.hash);
    if (!parsed) return;
    const { access_token: accessToken, state: encodedRedirect } = parsed;
    if (!accessToken) return;
    redirect = encodedRedirect && decodeURIComponent(encodedRedirect);
    managementClient.set(createContentfulManagementClient({ accessToken }));
    if (!$managementClient) return;
    const { email, firstName, lastName, avatarUrl } = await $managementClient.getCurrentUser();
    user.set({
      email,
      name: `${firstName} ${lastName}`,
      token: accessToken,
      avatarURL: avatarUrl,
    });
    if (redirect) {
      await timeout(2500);
      await goto(redirect, { replaceState: true });
    }
  };

  if (browser) handleHash();
</script>

{#if $user}
  <h1>Hello {$user.name}!</h1>
  {#if redirect}
    <p>Please wait to be redirected back to the previous page...</p>
  {/if}
{:else}
  <h1>Hello unknown user!</h1>
{/if}
