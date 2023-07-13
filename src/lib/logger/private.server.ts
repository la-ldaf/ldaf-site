import { LDAF_SLACK_WEBHOOK_URL } from "$env/static/private";
import type {
  PublicContext,
  SetPublicContextOptions,
  Logger,
  LoggerInternal,
  WithLoggerArg,
  Context,
  SetContextOptions,
} from "./types";
import setupLoggerMethod from "./setupLoggerMethod";
import { setContextOptions, setPublicContextOptions } from "./contextOptions";
import { logMessage, logError, logErrorResponse } from "./logMethods";
import { newMessage } from "./logMessages";
import { renderMessageToSlackMessage } from "./renderMessageToSlackMessage";
import { dev } from "$app/environment";
import logRawMessageToConsole from "./logRawMessageToConsole";
export type { Logger, Context };

const setContext = <K extends keyof Context>(
  logger: LoggerInternal,
  key: K,
  value: Context[K],
  options: SetContextOptions = setContextOptions
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

const logRawMessage: WithLoggerArg<"logRawMessage"> = async (_, message) => {
  if (!dev && LDAF_SLACK_WEBHOOK_URL) {
    const renderedToSlackMessage = renderMessageToSlackMessage(message);
    await fetch(LDAF_SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(renderedToSlackMessage),
    });
  }
  await logRawMessageToConsole(_, message);
};

type ContextInit = Partial<Omit<Context, "PUBLIC">> & { PUBLIC?: Partial<PublicContext> };

const newContext = (contextInit: ContextInit): Context => ({
  ...contextInit,
  PUBLIC: { ...contextInit.PUBLIC },
});

export type LoggerInit = {
  context?: Partial<Omit<Context, "PUBLIC"> & { PUBLIC: Partial<PublicContext> }>;
  logRawMessage?: typeof logRawMessage;
};

export const newLogger = ({
  logRawMessage: logRawMessageOverride = logRawMessage,
  context: contextInit = {},
}: LoggerInit = {}): Logger => {
  const loggerInit: Partial<LoggerInternal> = {};

  // This type assertion is necessary to create the self-referential object without any other
  // type issues. This type assertion is only safe if the Object.assign call below is preserved!
  const logger = loggerInit as LoggerInternal;

  Object.assign(loggerInit, {
    context: newContext(contextInit),
    newMessage: (init) => newMessage(logger, init),
    logRawMessage: setupLoggerMethod<Logger, LoggerInternal, "logRawMessage">(
      logger,
      logRawMessageOverride
    ),
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
  // correctly in the Object.assign call. This makes the type assertion of "logger" above safe to
  // do, assuming we don't remove this Object.assign call.

  return logger;
};

// We do _not_ use a default export in the private logger. This is because we should normally be
// using a logger with context specific to a single request (and is stored in the "locals" of the
// RequestEvent). When that logger isn't present, something has gone very wrong but we can still log
// by creating a new logger. The default export is thus avoided because it encourages using the
// logger the wrong way in the happy path.
