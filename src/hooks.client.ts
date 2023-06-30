import { newPublicLogger, type PublicLogger } from "$lib/logger";
import consoleErrorIfYouCan from "$lib/util/consoleErrorIfYouCan";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorStatus from "$lib/util/getErrorStatus";
import type { HandleClientError } from "@sveltejs/kit";
import { getContext } from "svelte";

export const handleError = (({ error }) => {
  const message = getErrorMessage(error);
  try {
    const logger = getContext<PublicLogger>("logger") ?? newPublicLogger();
    logger.logError(error);
  } catch (err) {
    consoleErrorIfYouCan(`Error while trying to log unexpected error: ${getErrorMessage(err)}`);
  }
  const status = getErrorStatus(error);
  return {
    message: `Unexpected error: ${message}`,
    ...(status ? { status } : {}),
  };
}) satisfies HandleClientError;
