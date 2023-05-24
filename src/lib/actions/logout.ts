import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { goto } from "$app/navigation";
import type { Writable } from "svelte/store";
import type { CurrentUser } from "$lib/contexts/currentUser";

let logout:
  | (({
      currentUser,
      fetch,
    }: {
      currentUser: Writable<CurrentUser | undefined>;
      fetch: typeof globalThis.fetch;
    }) => void)
  | undefined;

if (browser) {
  logout = async ({
    currentUser,
    fetch,
  }: {
    currentUser: Writable<CurrentUser | undefined>;
    fetch: typeof globalThis.fetch;
  }) => {
    const logoutResponse = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    if (!logoutResponse.ok) {
      const errorMessage = getErrorMessageFromResponse(logoutResponse);
      throw error(500, {
        message: `Failed to log out: ${logoutResponse.status} ${logoutResponse.statusText}: ${errorMessage}`,
      });
    }
    const refreshURL = new URL(location.toString());
    refreshURL.searchParams.delete("preview");
    currentUser?.set(undefined);
    await goto(refreshURL.toString(), { invalidateAll: true });
  };
}

export default logout;
