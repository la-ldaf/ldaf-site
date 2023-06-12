import { get } from "svelte/store";
import { browser } from "$app/environment";
import { page } from "$app/stores";
import { error } from "@sveltejs/kit";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

let logout: (() => void) | undefined;

if (browser) {
  logout = async () => {
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
    const url = get(page)?.url;
    if (!url) return location.reload();
    const refreshURL = new URL(url);
    refreshURL.searchParams.delete("preview");
    location.href = refreshURL.toString();
  };
}

export default logout;
