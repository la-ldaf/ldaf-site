import "@testing-library/jest-dom";
import { vi, describe, it, expect } from "vitest";
import IntersectionObserverMock, {
  intersect,
  observe,
  callback,
} from "./__tests__/IntersectionObserverMock";

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

import { getRootObserver, type RootObserver } from "./observe";

let rootObserver: RootObserver;

const getRootObserverOptions = { rootMargin: "100px" };

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
beforeEach(() => (rootObserver = getRootObserver(getRootObserverOptions)!));
afterEach(() => vi.restoreAllMocks());

describe("getRootObserver", () => {
  it("returns a root observer", () => {
    expect(IntersectionObserverMock).toHaveBeenCalledTimes(1);
    expect(IntersectionObserverMock.mock.calls[0]).toMatchObject([
      callback,
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
      intersect([{ target: element, isIntersecting: false }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: false });
      callback.mockRestore();

      intersect([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: true });
    });

    it("ignores other elements", () => {
      const anotherElement = document.createElement("div");
      intersect([{ target: anotherElement, isIntersecting: true }]);
      expect(callback).not.toHaveBeenCalled();

      const anotherCallback = vi.fn();
      rootObserver.observe(anotherElement, anotherCallback);
      intersect([{ target: anotherElement, isIntersecting: true }]);
      expect(anotherCallback).toHaveBeenCalled();
      expect(callback).not.toHaveBeenCalled();
    });

    it("unobserves an element", () => {
      rootObserver.unobserve(element);
      intersect([{ target: element, isIntersecting: true }]);
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('with "once" option', () => {
    beforeEach(() => rootObserver.observe(element, callback, { once: true }));
    it("observes an element intersect once", () => {
      intersect([{ target: element, isIntersecting: false }]);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: false });

      intersect([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: true });

      intersect([{ target: element, isIntersecting: true }]);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
