import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import getErrorStatus from "$lib/util/getErrorStatus";
import type { WithSomeLoggerArg } from "./types";

export const logMessage: WithSomeLoggerArg<"logMessage"> = async (logger, message, options) => {
  const messageObj = logger.newMessage({ message, logger.context, ...options });
  return logger.logRawMessage(messageObj);
};

export const logError: WithSomeLoggerArg<"logError"> = async (logger, error, options) => {
  const message = getErrorMessage(error);
  const status = getErrorStatus(error);
  const messageHasStatus = message.trimStart().search(/^[0-9]+\b/g);
  return logger.logMessage(messageHasStatus ? message : `${status}: ${message}`, options);
};

export const logErrorResponse: WithSomeLoggerArg<"logErrorResponse"> = async (
  logger,
  response,
  options
) => {
  const errorMessage = response.bodyUsed
    ? "[body already used; can't retrieve any error message that may exist]"
    : getErrorMessageFromResponse(response);
  return logger.logMessage(
    `Uncaught error: ${response.status}${
      response.statusText ? ` ${response.statusText}` : ""
    }: ${errorMessage}`,
    options
  );
};
