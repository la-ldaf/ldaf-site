import "@testing-library/jest-dom";
import { vi, describe, it, expect, type Mock } from "vitest";

const disconnect: Mock<[], void> = vi.fn();
const observe: Mock<[Element], void> = vi.fn();
const takeRecords = vi.fn();
const unobserve: Mock<[Element], void> = vi.fn();
let intersectionObserverCallback: (entries: ObserverEntry[]) => void;
let intersectionObserverOptions: IntersectionObserverInit;

const IntersectionObserverMock: Mock<[() => void, IntersectionObserverInit]> = vi.fn(
  (callback, options) => {
    intersectionObserverCallback = callback;
    intersectionObserverOptions = options;
    return {
      disconnect,
      observe,
      takeRecords,
      unobserve,
    };
  }
);

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

import { getRootObserver, type ObserverEntry, type RootObserver } from "./observe";

let rootObserver: RootObserver;

const getRootObserverOptions = { rootMargin: "100px" };

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
beforeEach(() => (rootObserver = getRootObserver(getRootObserverOptions)!));
afterEach(() => vi.restoreAllMocks());

describe("getRootObserver", () => {
  it("returns a root observer", () => {
    expect(IntersectionObserverMock).toHaveBeenCalledTimes(1);
    expect(IntersectionObserverMock.mock.calls[0]).toMatchObject([
      intersectionObserverCallback,
      getRootObserverOptions,
    ]);
    expect(rootObserver).toBeDefined();
    expect(rootObserver?.observe).toBeTypeOf("function");
    expect(rootObserver?.unobserve).toBeTypeOf("function");
  });
});

describe("RootObserver", () => {
  const element = document.createElement("div");
  const callback = vi.fn();

  describe("with default options", () => {
    beforeEach(() => rootObserver.observe(element, callback));

    it("calls IntersectionObserver when observing", () => {
      expect(observe).toHaveBeenCalledOnce();
      expect(observe).toHaveBeenCalledWith(element);
    });

    it("observes an element", () => {
      intersectionObserverCallback([{ target: element, isIntersecting: false }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: false });
      callback.mockRestore();

      intersectionObserverCallback([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: true });
    });

    it("ignores other elements", () => {
      const anotherElement = document.createElement("div");
      intersectionObserverCallback([{ target: anotherElement, isIntersecting: true }]);
      expect(callback).not.toHaveBeenCalled();

      const anotherCallback = vi.fn();
      rootObserver.observe(anotherElement, anotherCallback);
      intersectionObserverCallback([{ target: anotherElement, isIntersecting: true }]);
      expect(anotherCallback).toHaveBeenCalled();
      expect(callback).not.toHaveBeenCalled();
    });

    it("unobserves an element", () => {
      rootObserver.unobserve(element);
      intersectionObserverCallback([{ target: element, isIntersecting: true }]);
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('with "once" option', () => {
    beforeEach(() => rootObserver.observe(element, callback, { once: true }));
    it("observes an element intersect once", () => {
      intersectionObserverCallback([{ target: element, isIntersecting: false }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: false });

      intersectionObserverCallback([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: true });

      intersectionObserverCallback([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
