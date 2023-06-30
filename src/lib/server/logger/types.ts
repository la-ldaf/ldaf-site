import type { RequestEvent } from "@sveltejs/kit";
import type { PublicLogger, PublicContext, SetPublicContextOptions } from "$lib/logger";

export type Context = Partial<{
  redisConnected: boolean;
  request: RequestEvent;
}> & {
  // This is where the _public_ context goes. It will be sent to the client (and thus is not
  // private) and must be serializable.
  PUBLIC: PublicContext;
};

export type SetContextOptions = SetPublicContextOptions;

export type Logger = PublicLogger & {
  setContext: <K extends keyof Context>(
    key: K,
    value: Context[K],
    options?: SetContextOptions
  ) => void;
};
