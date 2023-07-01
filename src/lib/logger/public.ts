import setupLoggerMethod from "./setupLoggerMethod";
import type {
  PublicLogger,
  PublicLoggerInternal,
  PublicContext,
  WithPublicLoggerArg,
  SetPublicContextOptions,
} from "./types";
import { logMessage, logError, logErrorResponse } from "./logMethods";
import { newMessage, newPublicMessage } from "./logMessages";
export type { PublicLogger, PublicContext, SetPublicContextOptions };

// Regular setContext _only exists on the server_. On the client, _always_ use
// setPublicContext. setPublicContext can also be used on the server to set context that will be
// accessible by the client logger (so it must be serializable!). Note that "public" means "public
// to the browser session of the current user", so things like the current user data are safe to store
// in public context because only that user will see them.
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

const logRawMessage: WithPublicLoggerArg<"logRawMessage"> = async (_, message) => {
  await fetch(`/api/v1/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};

export const newPublicContext = (init: Partial<PublicContext> = {}): PublicContext => ({ ...init });

export type PublicLoggerInit = {
  context?: Partial<PublicContext>;
  logRawMessage?: typeof logRawMessage;
};

export const newPublicLogger = ({
  logRawMessage: logRawMessageOverride = logRawMessage, // this can be overridden for easy mocking
  context: contextInit = {},
}: PublicLoggerInit = {}): PublicLogger => {
  const loggerInit: Partial<PublicLoggerInternal> = {};
  const logger = loggerInit as PublicLoggerInternal;
  Object.assign(loggerInit, {
    context: newPublicContext(contextInit),
    newMessage: (init) => newPublicMessage(logger, init),
    logRawMessage: setupLoggerMethod<PublicLogger, PublicLoggerInternal, "logRawMessage">(
      logger,
      logRawMessageOverride
    ),
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
  } as const satisfies PublicLoggerInternal);
  // --------^ the "satisfies" ensures at compile time that we actually filled out the type
  // correctly in the Object.assign call. This makes the type assertion of "logger" above safe to
  // do, assuming we don't remove this Object.assign call.

  return logger;
};

// We do _not_ use a default export in the public logger. This is because we should be using the
// logger from the Svelte context (or a new one that we just created). It doesn't make a difference
// when running in the browser, but on the server (when rendering for initial load or for prerendering)
// we would otherwise mix up logger context from different requests.
