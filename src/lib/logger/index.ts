import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import setupLoggerMethod from "./setupLoggerMethod";
import type { PublicLogger, PublicContext, SetPublicContextOptions } from "./types";
export type { PublicLogger, PublicContext, SetPublicContextOptions };

type PublicLoggerInternal = PublicLogger & {
  context: PublicContext;
};

type WithLoggerArg<K extends keyof PublicLogger> = (
  logger: PublicLoggerInternal,
  ...args: Parameters<PublicLogger[K]>
) => ReturnType<PublicLogger[K]>;

export const setPublicContextOptions = {
  errorIfAlreadyDefined: false,
};

// Regular setContext _only exists on the server_. On the client, always use setPublicContext.
const setPublicContext = <K extends keyof PublicContext>(
  logger: PublicLoggerInternal,
  key: K,
  value: PublicContext[K],
  options: SetPublicContextOptions = {}
): void => {
  if (options.errorIfAlreadyDefined && logger.context[key] !== undefined) {
    throw new Error(`context ${key} was set more than once and errorIfAlreadyDefined was set`);
  }
  logger.context[key] = value;
};

const logMessage: WithLoggerArg<"logMessage"> = async (_, message) => {
  await fetch(`/api/v1/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
};

export const logError: WithLoggerArg<"logError"> = async (logger, error) => {
  if (!error || (typeof error !== "object" && typeof error !== "string")) {
    return logMessage(logger, "Uncaught error: unknown");
  }

  let message = getErrorMessage(error);

  if (typeof error !== "object") return logMessage(logger, message);

  if ("status" in error && (typeof error.status === "number" || typeof error.status === "string")) {
    message = `${error.status}: ${message}`;
  }

  return logMessage(logger, `Uncaught error: ${message}`);
};

export const logErrorResponse: WithLoggerArg<"logErrorResponse"> = async (logger, response) => {
  const errorMessage = response.bodyUsed
    ? "[body already used; can't retrieve any error message that may exist]"
    : getErrorMessageFromResponse(response);
  return logMessage(
    logger,
    `Uncaught error: ${response.status}${
      response.statusText ? ` ${response.statusText}` : ""
    }: ${errorMessage}`
  );
};

const newPublicContext = (init: Partial<PublicContext> = {}): PublicContext => ({ ...init });

export const newPublicLogger = (initContext: Partial<PublicContext> = {}): PublicLogger => {
  const loggerInit: Partial<PublicLoggerInternal> = {};
  const logger = loggerInit as PublicLoggerInternal;
  Object.assign(loggerInit, {
    context: newPublicContext(initContext),
    logMessage: setupLoggerMethod<PublicLogger, PublicLoggerInternal, "logMessage">(
      logger,
      logMessage
    ),
    logError: setupLoggerMethod<PublicLogger, PublicLoggerInternal, "logError">(logger, logError),
    logErrorResponse: setupLoggerMethod<PublicLogger, PublicLoggerInternal, "logErrorResponse">(
      logger,
      logErrorResponse
    ),
    setPublicContext: setupLoggerMethod<PublicLogger, PublicLoggerInternal, "setPublicContext">(
      logger,
      setPublicContext
    ),
  });

  return logger;
};
