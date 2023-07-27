import type { HandleServerError } from "@sveltejs/kit";
import { newLogger } from "$lib/logger/private.server";
import consoleErrorIfYouCan from "$lib/util/consoleErrorIfYouCan";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorStatus from "$lib/util/getErrorStatus";

const handleError = (async ({ error, event }) => {
  let message: string | undefined, status: number | undefined;
  try {
    const logger = event?.locals?.logger ?? newLogger();
    message = getErrorMessage(error);
    status = getErrorStatus(error);
    try {
      logger.setPublicContext("url", event?.url?.toString());
    } catch (_) {
      // do nothing
    }
    await logger?.logError?.(error);
  } catch (err) {
    consoleErrorIfYouCan(`Error while trying to log unexpected error: ${message}`);
  }
  return {
    message: `Unexpected error: ${message}`,
    ...(status ? { status } : {}),
  };
}) satisfies HandleServerError;

export default handleError;
