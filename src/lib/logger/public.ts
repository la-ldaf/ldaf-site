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
// accessible by the client logger (so it must be serializable!).
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

  return logger;
};
