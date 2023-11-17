<script lang="ts">
  import { error, type ActionResult } from "@sveltejs/kit";
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { deserialize } from "$app/forms";
  import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import timeout from "$lib/util/timeout";
  import { getCurrentUserStore, type User } from "$lib/context/currentUser";

  const currentUser = getCurrentUserStore();

  let redirect: string | undefined;
  let newUser: User | undefined;

  const handleHash = async () => {
    if (!$page.url.hash) return goto("/", { replaceState: true });
    const parsed = parseHashQuery($page.url.hash);
    if (!parsed) return goto("/", { replaceState: true });
    const { access_token: accessToken, state: encodedRedirect } = parsed;
    if (!accessToken) return goto("/", { replaceState: true });
    redirect = encodedRedirect && decodeURIComponent(encodedRedirect);

    const formData = new FormData();
    formData.append("token", accessToken);
    const loginResponse = await fetch("/login", {
      method: "POST",
      body: formData,
    });

    if (!loginResponse.ok) {
      const errorMessage = getErrorMessageFromResponse(loginResponse);
      throw error(loginResponse.status, {
        message: `Failed to log in: ${loginResponse.status} ${loginResponse.statusText}: ${errorMessage}`,
      });
    }

    const body: ActionResult<{
      currentUser: User;
    }> = deserialize(await loginResponse.text());

    if (body.type === "error") {
      throw error(500, {
        message: `Failed to log in: request to login endpoint errored: ${body.status} ${
          body.error?.message ?? ""
        }`,
      });
    }

    if (body.type === "failure") {
      throw error(body.status, {
        message: `Failed to log in: request to login endpoint failed: ${body.status}`,
      });
    }

    if (body.type === "redirect") {
      throw error(500, {
        message: `Failed to log in: request to login endpoint redirected unexpectedly`,
      });
    }

    if (!body.data) {
      throw error(500, {
        message: `Failed to log in: login endpoint response had no data`,
      });
    }

    currentUser.set(body.data.currentUser);
    newUser = body.data.currentUser;

    if (redirect) {
      await timeout(500);
      await goto(redirect, { replaceState: true });
    }
  };

  if (browser) handleHash();
</script>

<div class="grid-container">
  {#if newUser}
    <p>Hello {newUser.name}!</p>
    <p>You are now logged in!</p>
  {:else if $currentUser}
    <p>Hello {$currentUser.name}!</p>
    <p>You are already logged in!</p>
  {/if}

  {#if redirect}
    <p>Please wait to be redirected back to the previous page...</p>
  {:else}
    <p>Logging in...</p>
  {/if}
</div>
