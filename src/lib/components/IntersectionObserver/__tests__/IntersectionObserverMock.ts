// This is a mock of the IntersectionObserver _window global_ not the IntersectionObserver _component_

import "@testing-library/jest-dom";
import { vi, type Mock } from "vitest";
import type { ObserverEntry } from "../observe";

type IntersectionObserverType = Pick<
  (typeof IntersectionObserver)["prototype"],
  keyof (typeof IntersectionObserver)["prototype"]
>;

type Instance = {
  callback: IntersectionObserverCallback;
  targets: Element[];
  formerTargets: Element[];
  observer: IntersectionObserverType;
};

const getInitialInstance = (
  callback: IntersectionObserverCallback,
  observer: IntersectionObserverType,
): Instance => ({ callback, observer, targets: [], formerTargets: [] });

let instances: Instance[] = [];

const getObserve: (i: number) => Mock<[Element], void> = (i) =>
  vi.fn((target) => {
    instances[i].targets.push(target);
  });

const getUnobserve: (i: number) => Mock<[Element], void> = (i) =>
  vi.fn((target) => {
    const targetI = instances[i].targets.indexOf(target);
    if (targetI < 0) return;
    instances[i].targets.splice(targetI, 1);
    instances[i].formerTargets.push(target);
  });

const getDisconnect: (i: number) => Mock<[], void> = (i) =>
  vi.fn(() => {
    instances[i].formerTargets.push(...instances[i].targets);
    instances[i].targets = [];
  });

const getTakeRecords: (i: number) => Mock<[], IntersectionObserverEntry[]> = (i: number) =>
  vi.fn(() =>
    instances[i].targets.map((target) =>
      createIntersectionObserverEntry({ target, isIntersecting: true }),
    ),
  );

export const createIntersectionObserverEntry = ({
  target,
  isIntersecting,
}: {
  target: Element;
  isIntersecting: boolean;
}): IntersectionObserverEntry => {
  const boundingRect = target.getBoundingClientRect();
  return {
    target,
    isIntersecting,
    time: performance.now(),
    boundingClientRect: boundingRect,
    intersectionRatio: isIntersecting ? 1 : 0,
    intersectionRect: isIntersecting ? boundingRect : { ...boundingRect, width: 0, height: 0 },
    rootBounds: document.body.getBoundingClientRect(),
  };
};

const IntersectionObserverMock: Mock<[() => void, IntersectionObserverInit]> = vi.fn(
  (callback, { root = null, rootMargin, threshold = null }) => {
    const i = instances.length;
    const observer: IntersectionObserverType = {
      root,
      rootMargin: rootMargin ?? "",
      thresholds: Array.isArray(threshold) ? threshold : threshold ? [threshold] : [0],
      disconnect: getDisconnect(i),
      observe: getObserve(i),
      takeRecords: getTakeRecords(i),
      unobserve: getUnobserve(i),
    };
    const instance = getInitialInstance(callback, observer);
    instances.push(instance);
    return observer;
  },
);

const getInstance = (stateIndex = 0): Instance | undefined => instances[stateIndex];

const getTarget = (stateIndex = 0, targetIndex = 0): Element | undefined => {
  const instance = getInstance(stateIndex);
  if (!instance) return;
  return instance.targets[targetIndex] || instance.formerTargets[targetIndex];
};

type ObserverEntryInit =
  | {
      target?: Element;
      isIntersecting?: boolean;
    }
  | boolean
  | undefined;

const getObserverEntryInit =
  (i: number) =>
  (init: ObserverEntryInit): ObserverEntry => {
    const defaultTarget = getTarget(i);
    if ((typeof init === "boolean" || init === undefined || !init.target) && !defaultTarget) {
      console.trace();
      throw new Error("could not initialize observer entry without a target");
    }
    if (init === undefined) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { target: defaultTarget!, isIntersecting: true };
    }
    if (typeof init === "boolean") {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return { target: defaultTarget!, isIntersecting: init };
    }
    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      target: (init.target || defaultTarget)!,
      isIntersecting: init.isIntersecting === undefined ? true : init.isIntersecting,
    };
  };

const getIntersect = (i: number) => (arg?: ObserverEntryInit[] | ObserverEntryInit) => {
  const observerEntryInit = getObserverEntryInit(i);
  let entries: ObserverEntry[];
  if (Array.isArray(arg)) {
    entries = arg.map(observerEntryInit);
  } else if (typeof arg === "object" || typeof arg === "boolean" || arg === undefined) {
    entries = [arg].map(observerEntryInit);
  } else {
    throw new Error(`unexpected argument ${arg}`);
  }
  const instance = getInstance(i);
  if (!instance) throw new Error(`could not find instance for index ${i}`);
  instance.callback(entries.map(createIntersectionObserverEntry), instance.observer);
};

const originalIntersectionObserver = window.IntersectionObserver;

export const mock = {
  setup: () => {
    instances = [];
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
  },
  restore: () => {
    instances = [];
    IntersectionObserverMock.mockRestore();
  },
  teardown: () => {
    instances = [];
    window.IntersectionObserver = originalIntersectionObserver;
  },

  get instances() {
    return instances;
  },

  get intersect() {
    return getIntersect(0);
  },

  get observe() {
    return this.instances[0]?.observer?.observe;
  },
  get unobserve() {
    return this.instances[0]?.observer?.unobserve;
  },
  get disconnect() {
    return this.instances[0]?.observer?.disconnect;
  },
  get takeRecords() {
    return this.instances[0]?.observer?.takeRecords;
  },

  get callback() {
    return this.instances[0]?.callback;
  },
};

export default IntersectionObserverMock;
