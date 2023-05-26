<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import userToken from "$lib/stores/userToken";
  import userInfo from "$lib/stores/userInfo";
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

    userToken?.set(accessToken);

    if (redirect) {
      await timeout(2500);
      await goto(redirect, { replaceState: true });
    }
  };

  if (browser) handleHash();
</script>

{#if $userInfo}
  <p>Hello {$userInfo.name}!</p>
{/if}

{#if redirect}
  <p>Please wait to be redirected back to the previous page...</p>
{:else}
  <p>Logging in...</p>
{/if}
