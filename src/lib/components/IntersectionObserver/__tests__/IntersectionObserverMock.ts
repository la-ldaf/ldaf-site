// This is a mock of the IntersectionObserver _window global_ not the IntersectionObserver _component_

import "@testing-library/jest-dom";
import { vi, type Mock } from "vitest";
import type { ObserverEntry } from "../observe";

type MockState = {
  targets: Element[];
  formerTargets: Element[];
};

const getInitialMockState = (): MockState => ({ targets: [], formerTargets: [] });
let mockState = getInitialMockState();

export const observe: Mock<[Element], void> = vi.fn((target) => {
  mockState.targets.push(target);
});

export const unobserve: Mock<[Element], void> = vi.fn((target) => {
  const i = mockState.targets.indexOf(target);
  if (i < 0) return;
  mockState.targets.splice(i, 1);
  mockState.formerTargets.push(target);
});

export const disconnect: Mock<[], void> = vi.fn();

export const takeRecords = vi.fn();

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

export let callback: (entries: IntersectionObserverEntry[]) => void;
export let options: IntersectionObserverInit;

const IntersectionObserverMock: Mock<[() => void, IntersectionObserverInit]> = vi.fn((cb, opts) => {
  callback = cb;
  options = opts;
  return {
    disconnect,
    observe,
    takeRecords,
    unobserve,
  };
});

const firstTarget = (): Element | undefined => mockState.targets[0] || mockState.formerTargets[0];

type ObserverEntryInit =
  | {
      target?: Element;
      isIntersecting?: boolean;
    }
  | boolean
  | undefined;

const observerEntryInit = (init: ObserverEntryInit): ObserverEntry => {
  const defaultTarget = firstTarget();
  if ((typeof init === "boolean" || init === undefined || !init.target) && !defaultTarget) {
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
    target: (init.target || firstTarget())!,
    isIntersecting: init.isIntersecting === undefined ? true : init.isIntersecting,
  };
};

export const intersect = (arg?: ObserverEntryInit[] | ObserverEntryInit) => {
  let entries: ObserverEntry[];
  if (Array.isArray(arg)) {
    entries = arg.map(observerEntryInit);
  } else if (typeof arg === "object" || typeof arg === "boolean" || arg === undefined) {
    entries = [arg].map(observerEntryInit);
  } else {
    throw new Error(`unexpected argument ${arg}`);
  }
  callback(entries.map(createIntersectionObserverEntry));
};

const originalIntersectionObserver = window.IntersectionObserver;
export const stub = () => {
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
  mockState = getInitialMockState();
};

export const restoreStub = () => {
  IntersectionObserverMock.mockRestore();
  mockState = getInitialMockState();
};

export const unstub = () => {
  window.IntersectionObserver = originalIntersectionObserver;
};

export default IntersectionObserverMock;
