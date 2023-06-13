import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { goto } from "$app/navigation";
import type { Writable } from "svelte/store";
import type { CurrentUser } from "$lib/contexts/currentUser";

let logout:
  | (({ currentUser }: { currentUser: Writable<CurrentUser | undefined> }) => void)
  | undefined;

if (browser) {
  logout = async ({ currentUser }: { currentUser: Writable<CurrentUser | undefined> }) => {
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
    refreshURL.searchParams.append("logout", ""); // needed so the layout doesn't preserve the preview parameter
    currentUser?.set(undefined);
    await goto(refreshURL.toString(), { invalidateAll: true });
  };
}

export default logout;
