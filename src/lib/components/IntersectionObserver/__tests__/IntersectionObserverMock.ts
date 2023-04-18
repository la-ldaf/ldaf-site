// This is a mock of the IntersectionObserver _window global_ not the IntersectionObserver _component_

import "@testing-library/jest-dom";
import { vi, type Mock } from "vitest";
import type { ObserverEntry } from "../observe";

export const disconnect: Mock<[], void> = vi.fn();
export const observe: Mock<[Element], void> = vi.fn();
export const takeRecords = vi.fn();
export const unobserve: Mock<[Element], void> = vi.fn();

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

export const intersect = (entries: ObserverEntry[]) =>
  callback(entries.map(createIntersectionObserverEntry));

export default IntersectionObserverMock;
