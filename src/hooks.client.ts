import { newPublicLogger, type PublicLogger } from "$lib/logger/public";
import consoleErrorIfYouCan from "$lib/util/consoleErrorIfYouCan";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorStatus from "$lib/util/getErrorStatus";
import type { HandleClientError } from "@sveltejs/kit";
import { getContext } from "svelte";

export const handleError = (async ({ error, event }) => {
  const logger = getContext<PublicLogger>("logger") ?? newPublicLogger();
  const message = getErrorMessage(error);
  try {
    try {
      logger.setPublicContext("url", event.url.toString());
    } catch (_) {
      // do nothing
    }
    await logger.logError(error);
  } catch (err) {
    consoleErrorIfYouCan(`Error while trying to log unexpected error: ${message}`);
  }
  const status = getErrorStatus(error);
  return {
    message: `Unexpected error: ${message}`,
    ...(status ? { status } : {}),
  };
}) satisfies HandleClientError;
