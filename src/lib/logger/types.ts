import type { RequestEvent } from "@sveltejs/kit";
import type { CurrentUser } from "$lib/types";

const eventTypes = [
  "INFO",
  "ERROR",
  "ERROR_RESPONSE",
  "EXPECTED_ERROR",
  "EXPECTED_ERROR_RESPONSE",
] as const;
type EventType = (typeof eventTypes)[number];

export type Message = {
  messageType: "LOG_MESSAGE";

  // plain text message
  eventType: EventType;
  message: string;
  source: "client" | "server";
  context: Context;
};

export type PublicMessage = Omit<Message, "messageType" | "context"> & {
  messageType: "PUBLIC_LOG_MESSAGE";
  source: "client" | "server";
  context: PublicContext;
};

export type AnyMessage = Message | PublicMessage;

export type MessageInit = Partial<Omit<Message, "messageType" | "context">>;
// There is no PublicMessageInit because MessageInit _has_ to be compatible with both for the types
// to work, so it's simpler to just use a single type.

// This type represents _public_ context, which will be sent to the client (and thus is not private)
// and must be serializable.
export type PublicContext = Partial<{
  currentUser: CurrentUser;
  url: string;
  initialURL: string;
  isPreview: boolean;
}>;

export type PublicContextInit = PublicContext;

export type SetPublicContextOptions = Partial<{
  errorIfAlreadyDefined: boolean;
}>;

export type Context = Partial<{
  redisConnected: boolean;
  request: RequestEvent;
}> & {
  // This is where the _public_ context goes. It will be sent to the client (and thus is not
  // private) and must be serializable.
  PUBLIC: PublicContext;
};

export type SetContextOptions = SetPublicContextOptions;

export type NewMessage = (init?: MessageInit) => AnyMessage;

export type LogRawMessage = (message: AnyMessage) => Promise<void>;

export type LogMessageOptions = Partial<
  Omit<Message | PublicMessage, "message" | "messageType" | "source" | "context">
>;
export type LogMessage = (message: string, options?: LogMessageOptions) => Promise<void>;

export type LogErrorOptions = LogMessageOptions;
export type LogError = (error: unknown, options?: LogErrorOptions) => Promise<void>;

export type LogErrorResponseOptions = LogErrorOptions;
export type LogErrorResponse = (
  response: Response,
  options?: LogErrorResponseOptions
) => Promise<void>;

export type PublicLogger = {
  logMessage: LogMessage;
  logError: LogError;
  logErrorResponse: LogErrorResponse;
  setPublicContext: <K extends keyof PublicContext>(
    key: K,
    value: PublicContext[K],
    options?: SetPublicContextOptions
  ) => void;
};

export type PublicLoggerInternalMethods = PublicLogger & {
  newMessage: NewMessage;
  logRawMessage: LogRawMessage;
};

export type PublicLoggerInternal = PublicLoggerInternalMethods & {
  context: PublicContext;
};

export type WithPublicLoggerArg<K extends keyof PublicLoggerInternalMethods> = (
  logger: PublicLoggerInternal,
  ...args: Parameters<PublicLoggerInternalMethods[K]>
) => ReturnType<PublicLoggerInternalMethods[K]>;

export type Logger = PublicLogger & {
  setContext: <K extends keyof Context>(
    key: K,
    value: Context[K],
    options?: SetContextOptions
  ) => void;
  logRawMessage: LogRawMessage;
};

export type LoggerInternalMethods = Logger & {
  newMessage: NewMessage;
};

export type LoggerInternal = LoggerInternalMethods & {
  context: Context;
};

export type WithLoggerArg<K extends keyof LoggerInternalMethods> = (
  logger: LoggerInternal,
  ...args: Parameters<LoggerInternalMethods[K]>
) => ReturnType<LoggerInternalMethods[K]>;

export type WithSomeLoggerArg<K extends keyof LoggerInternalMethods> = (
  logger: LoggerInternal | PublicLoggerInternal,
  ...args: Parameters<LoggerInternalMethods[K]>
) => ReturnType<LoggerInternalMethods[K]>;
