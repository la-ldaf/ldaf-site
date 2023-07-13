import catchMeIfYouCan from "$lib/util/catchMeIfYouCan";
import consoleErrorIfYouCan from "$lib/util/consoleErrorIfYouCan";

export type OnlyVoidFunctions<T extends object> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof T]: T[K] extends ((...args: any[]) => void) | ((...args: any[]) => Promise<void>)
    ? T[K]
    : never;
};

// The only type assertions in this function are asserting that we are returning the correct type,
// which we know must be undefined or Promise<undefined> becuase of the OnlyVoidFunctions constraint
// on L. The only scenario where this could be unsafe is if the function is a synchronous function
// that returns a promise (as opposed to an actual async function, which _cannot_ return undefined
// synchronously and _always_ returns at least a Promise<void>) that returns undefined or null or
// something instead of the promise it's supposed to. We could patch this error by either making
// separate setupSyncMethod and setupAsyncMethod functions (not as easy as it sounds) or by
// enforcing that every logger method is async, either one of which would allow us to stop
// type-asserting the return type.
export default <
    L extends object,
    LInternal extends L,
    K extends keyof M,
    M extends OnlyVoidFunctions<LInternal> = OnlyVoidFunctions<LInternal>
  >(
    logger: LInternal,
    method: (...args: [LInternal, ...Parameters<M[K]>]) => ReturnType<M[K]>
  ) =>
  (...args: Parameters<M[K]>): ReturnType<M[K]> => {
    try {
      try {
        const maybePromise = method(logger, ...args);
        catchMeIfYouCan(maybePromise, (err) =>
          consoleErrorIfYouCan("Got the following error trying to send a log!", err)
        );
        if (
          maybePromise &&
          typeof maybePromise === "object" &&
          "then" in maybePromise &&
          typeof maybePromise.then === "function"
        ) {
          return Promise.resolve() as ReturnType<M[K]>;
        }
        return undefined as ReturnType<M[K]>;
      } catch (err) {
        console.error("Got the following error trying to send a log!", err);
        return undefined as ReturnType<M[K]>;
      }
    } catch (_) {
      // We've exhausted all our options if we can't even log to the console. Nothing left to do,
      // and we can't re-throw the error because logger methods are frequently called in error
      // handlers.
      return undefined as ReturnType<M[K]>;
    }
  };
