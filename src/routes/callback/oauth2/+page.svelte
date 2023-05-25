<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import managementClient from "$lib/stores/managementClient";
  import user from "$lib/stores/user";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import timeout from "$lib/util/timeout";

  let redirect: string | undefined;

  const handleHash = async () => {
    if (!$page.url.hash) return goto("/", { replaceState: true });
    const parsed = parseHashQuery($page.url.hash);
    if (!parsed) return goto("/", { replaceState: true });
    const { access_token: accessToken, state: encodedRedirect } = parsed;
    if (!accessToken) return goto("/", { replaceState: true });
    redirect = encodedRedirect && decodeURIComponent(encodedRedirect);

    const { createClient: createManagementClient } = await import("contentful-management");

    managementClient?.set(createManagementClient({ accessToken }));
    if (!$managementClient) return goto("/", { replaceState: true });

    const { email, firstName, lastName, avatarUrl } = await $managementClient.getCurrentUser();
    user?.set({
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
  <p>Hello {$user.name}!</p>
  {#if redirect}
    <p>Please wait to be redirected back to the previous page...</p>
  {/if}
{:else}
  <p>Logging in...</p>
{/if}
