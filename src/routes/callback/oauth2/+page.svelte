<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import parseHashQuery from "$lib/util/parseHashQuery";
  import timeout from "$lib/util/timeout";
  import { getContext } from "svelte";
  import { key as currentUserKey, type CurrentUser } from "$lib/contexts/currentUser";
  import { error, type ActionResult } from "@sveltejs/kit";
  import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

  const currentUser = getContext<CurrentUser | undefined>(currentUserKey);

  let redirect: string | undefined;
  let loginErrorMessage: string | undefined;
  let newUser: CurrentUser | undefined;

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
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      body: formData,
    });

    if (!loginResponse.ok) {
      const errorMessage = getErrorMessageFromResponse(loginResponse);
      throw error(loginResponse.status, {
        message: `Failed to log in: ${loginResponse.status} ${loginResponse.statusText}: ${errorMessage}`,
      });
    }

    if (loginResponse.headers.get("Content-Type")?.startsWith("application/json")) {
      throw error(500, {
        message: "Failed to log in: got unexpected content type response when attempting to log in",
      });
    }

    const body = (await loginResponse.json()) as ActionResult<{
      currentUser: CurrentUser;
    }>;

    if (body.type === "error") {
      throw error(500, {
        message: `Failed to log in: request to login endpoint errored: ${body.status} ${body.error?.message}`,
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

    newUser = body.data.currentUser;

    if (redirect) {
      await timeout(2500);
      await goto(redirect, { replaceState: true });
    }
  };

  if (browser) handleHash();
</script>

{#if loginErrorMessage}
  <p>Failed to log in!</p>
  <p>{loginErrorMessage}</p>
{:else if currentUser}
  <p>Hello {currentUser.name}!</p>
  <p>You are already logged in!</p>
{:else if newUser}
  <p>Hello {newUser.name}!</p>
  <p>You are now logged in!</p>
{/if}

{#if redirect}
  <p>Please wait to be redirected back to the previous page...</p>
{:else}
  <p>Logging in...</p>
{/if}
