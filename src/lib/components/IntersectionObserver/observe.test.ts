import "@testing-library/jest-dom";
import { vi, describe, it, expect } from "vitest";
import IntersectionObserverMock, {
  mock as intersectionObserverMock,
} from "./__tests__/IntersectionObserverMock";
const { intersect } = intersectionObserverMock;

import { getRootObserver, type RootObserver } from "./observe";

let rootObserver: RootObserver;

const getRootObserverOptions = { rootMargin: "100px" };

beforeAll(() => {
  intersectionObserverMock.setup();
  return () => intersectionObserverMock.teardown();
});

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  rootObserver = getRootObserver(getRootObserverOptions)!;
  return () => {
    vi.restoreAllMocks();
    intersectionObserverMock.restore();
  };
});

describe("getRootObserver", () => {
  it("returns a root observer", () => {
    expect(IntersectionObserverMock).toHaveBeenCalledTimes(1);
    expect(IntersectionObserverMock.mock.calls[0]).toMatchObject([
      intersectionObserverMock.callback,
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
      const { observe } = intersectionObserverMock;
      expect(observe).toHaveBeenCalledOnce();
      expect(observe).toHaveBeenCalledWith(element);
    });

    it("observes an element", () => {
      intersect(false);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: false });
      callback.mockRestore();

      intersect();
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith({ target: element, isIntersecting: true });
    });

    it("ignores other elements", () => {
      const anotherElement = document.createElement("div");
      intersect({ target: anotherElement, isIntersecting: true });
      expect(callback).not.toHaveBeenCalled();

      const anotherCallback = vi.fn();
      rootObserver.observe(anotherElement, anotherCallback);
      intersect({ target: anotherElement, isIntersecting: true });
      expect(anotherCallback).toHaveBeenCalled();
      expect(callback).not.toHaveBeenCalled();
    });

    it("unobserves an element", () => {
      rootObserver.unobserve(element);
      intersect();
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('with "once" option', () => {
    beforeEach(() => rootObserver.observe(element, callback, { once: true }));
    it("observes an element intersect once", () => {
      intersect(false);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: false });

      intersect();
      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenLastCalledWith({ target: element, isIntersecting: true });

      intersect();
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });
});
