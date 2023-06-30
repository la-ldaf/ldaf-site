import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { goto } from "$app/navigation";
import type { Writable } from "svelte/store";
import type { CurrentUser } from "$lib/contexts/currentUser";
import type { PublicLogger } from "$lib/logger";

let logout:
  | (({
      currentUser,
      fetch,
      logger,
    }: {
      currentUser: Writable<CurrentUser | undefined>;
      fetch: typeof globalThis.fetch;
      logger: PublicLogger;
    }) => void)
  | undefined;

if (browser) {
  logout = async ({ currentUser, fetch, logger }) => {
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
      // we don't use logger.logErrorResponse because we've already used the body in getErrorMessageFromResponse
      logger.logError({ message });
      throw error(500, { message });
    }
    const refreshURL = new URL(location.toString());
    refreshURL.searchParams.delete("preview");
    currentUser?.set(undefined);
    logger.setPublicContext("currentUser", undefined);
    await goto(refreshURL.toString(), { invalidateAll: true });
  };
}

export default logout;
