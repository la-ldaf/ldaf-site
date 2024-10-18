import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { goto } from "$app/navigation";
import type { Writable } from "svelte/store";
import type { User } from "$lib/context/currentUser";

let logout:
  | (({
      currentUser,
      fetch,
    }: {
      currentUser: Writable<User | undefined>;
      fetch: typeof globalThis.fetch;
    }) => void)
  | undefined;

if (browser) {
  logout = async ({ currentUser, fetch }) => {
    const logoutResponse = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    if (!logoutResponse.ok) {
      const responseErrorMessage = getErrorMessageFromResponse(logoutResponse);
      const message = `Failed to log out: ${logoutResponse.status} ${logoutResponse.statusText}: ${responseErrorMessage}`;
      error(500, { message });
    }
    const refreshURL = new URL(location.toString());
    refreshURL.searchParams.delete("preview");
    currentUser?.set(undefined);
    await goto(refreshURL.toString(), { invalidateAll: true });
  };
}

export default logout;
