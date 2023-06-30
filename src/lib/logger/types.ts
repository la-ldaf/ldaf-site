import type { CurrentUser } from "$lib/types";

// To avoid using the logger's context as a bag of things to pass around, we separate the two
// following types:
//
// - Logger is the public interface returned by newLogger

// This type represents _public_ context, which will be sent to the client (and thus is not private)
// and must be serializable.
export type PublicContext = Partial<{
  currentUser: CurrentUser;
  url: string;
  initialURL: string;
  isPreview: boolean;
}>;

export type SetPublicContextOptions = Partial<{
  errorIfAlreadyDefined: boolean;
}>;

// - LoggerInternal is the internal interface that has access to logger.context
export type PublicLogger = {
  logMessage: (message: string) => Promise<void>;
  logError: (error: unknown) => Promise<void>;
  logErrorResponse: (response: Response) => Promise<void>;
  setPublicContext: <K extends keyof PublicContext>(
    key: K,
    value: PublicContext[K],
    options?: SetPublicContextOptions
  ) => void;
};
