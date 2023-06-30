import { LDAF_SLACK_WEBHOOK_URL } from "$env/static/private";
import {
  setPublicContextOptions,
  type PublicContext,
  type SetPublicContextOptions,
} from "$lib/logger";
import setupLoggerMethod from "$lib/logger/setupLoggerMethod";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import type { Logger, Context, SetContextOptions } from "./types";
export type { Logger, Context };

type LoggerInternal = Logger & {
  context: Context;
};

type WithLoggerArg<K extends keyof Logger> = (
  logger: LoggerInternal,
  ...args: Parameters<Logger[K]>
) => ReturnType<Logger[K]>;

const contextOptionsDefaults: SetContextOptions = {
  errorIfAlreadyDefined: false,
};

const setContext = <K extends keyof Context>(
  logger: LoggerInternal,
  key: K,
  value: Context[K],
  options: SetContextOptions = contextOptionsDefaults
) => {
  const { context } = logger;
  if (options.errorIfAlreadyDefined && context[key] !== undefined) {
    throw new Error(`context ${key} was set more than once and errorIfAlreadyDefined was set`);
  }
  context[key] = value;
};

const setPublicContext = <K extends keyof PublicContext>(
  logger: LoggerInternal,
  key: K,
  value: PublicContext[K],
  options: SetPublicContextOptions = setPublicContextOptions
) => {
  const {
    context: { PUBLIC: publicContext },
  } = logger;
  if (options.errorIfAlreadyDefined && publicContext[key] !== undefined) {
    throw new Error(
      `public context ${key} was set more than once and errorIfAlreadyDefined was set`
    );
  }
  publicContext[key] = value;
};

const logMessage: WithLoggerArg<"logMessage"> = async (_, message) => {
  await fetch(LDAF_SLACK_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: message }),
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

const newContext = (): Context => ({ ...contextOptionsDefaults, PUBLIC: {} });

export const newLogger = (): Logger => {
  const loggerInit: Partial<LoggerInternal> = {};
  // This type assertion is necessary to create the self-referential object without any other
  // type issues
  const logger = loggerInit as LoggerInternal;

  Object.assign(loggerInit, {
    context: newContext(),
    logMessage: setupLoggerMethod<Logger, LoggerInternal, "logMessage">(logger, logMessage),
    logError: setupLoggerMethod<Logger, LoggerInternal, "logError">(logger, logError),
    logErrorResponse: setupLoggerMethod<Logger, LoggerInternal, "logErrorResponse">(
      logger,
      logErrorResponse
    ),
    setPublicContext: setupLoggerMethod<Logger, LoggerInternal, "setPublicContext">(
      logger,
      setPublicContext
    ),
    setContext: setupLoggerMethod<Logger, LoggerInternal, "setContext">(logger, setContext),
  } as const satisfies LoggerInternal);
  // --------^ the "satisfies" ensures at compile time that we actually filled out the type
  // correctly in the Object.assign call. This makes the type assertion above safe to do, assuming
  // we don't remove this Object.assign call.

  return logger;
};
