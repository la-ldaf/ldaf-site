import type { AnyMap } from "$lib/util/types";

export type ObserveCallbackArg = {
  target: Element;
  isIntersecting: boolean;
};
export type ObserveCallback = (arg: ObserveCallbackArg) => void;

type ResolvedObserveOptions = {
  once: boolean;
};
export type ObserveOptions = Partial<ResolvedObserveOptions>;

const defaultObserveOptions = {
  once: false,
};

const resolveOptions = (options: ObserveOptions): ResolvedObserveOptions => ({
  ...defaultObserveOptions,
  ...options,
});

export type ObserveCallbacks = AnyMap<Element, ObserveCallback>;

const unobserve = (
  observer: IntersectionObserver,
  callbacks: ObserveCallbacks,
  target: Element
) => {
  callbacks.delete(target);
  observer.unobserve(target);
};

const observe = (
  observer: IntersectionObserver,
  callbacks: ObserveCallbacks,
  target: Element,
  callback: ObserveCallback,
  options: ObserveOptions = {}
) => {
  const { once } = resolveOptions(options);

  let cb = callback;
  if (once) {
    cb = (arg: ObserveCallbackArg) => {
      callback(arg);
      if (arg.isIntersecting && once) unobserve(observer, callbacks, target);
    };
  }

  callbacks.set(target, cb);
  observer.observe(target);
};

export type ObserverEntry = Pick<IntersectionObserverEntry, "target" | "isIntersecting">;
const getObserverCallback = (callbacks: ObserveCallbacks) => (entries: ObserverEntry[]) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;
    const callback = callbacks.get(target);
    if (callback) callback({ target, isIntersecting });
  });
};

export type RootObserver = {
  unobserve: (target: Element) => void;
  observe: (target: Element, callback: ObserveCallback, options?: ObserveOptions) => void;
};

export const getRootObserver = (
  options: IntersectionObserverInit = {}
): RootObserver | undefined => {
  const callbacks = new WeakMap<Element, ObserveCallback>();
  if (typeof IntersectionObserver === "undefined") return;
  const observer = new IntersectionObserver(getObserverCallback(callbacks), options);
  return {
    unobserve: (target) => unobserve(observer, callbacks, target),
    observe: (target, callback, options = {}) =>
      observe(observer, callbacks, target, callback, options),
  };
};
