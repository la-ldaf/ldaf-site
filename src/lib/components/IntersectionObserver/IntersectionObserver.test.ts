import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/svelte";
import type { ComponentProps } from "svelte";
import { vi, describe, it, expect } from "vitest";

import IntersectionObserverMock, {
  mock as intersectionObserverMock,
} from "./__tests__/IntersectionObserverMock";
const { intersect } = intersectionObserverMock;

import IntersectionObserverTest from "./__tests__/IntersectionObserverTest.svelte";
import * as environment from "$app/environment";

vi.mock("$app/environment", () => ({
  browser: false,
}));

const withBrowser = (value = true) => ((environment as Record<"browser", boolean>).browser = value);

beforeAll(() => {
  intersectionObserverMock.setup();
  return () => intersectionObserverMock.teardown();
});

beforeEach(() => withBrowser());
afterEach(() => {
  vi.restoreAllMocks();
  intersectionObserverMock.restore();
});

describe("IntersectionObserver", () => {
  const text = "Not Intersecting";
  const intersectingText = "Intersecting";
  const targetTestId = "intersectionObserverTarget";

  let component: IntersectionObserverTest;

  const renderWithProps = (props?: Partial<ComponentProps<IntersectionObserverTest>>) => {
    ({ component } = render(IntersectionObserverTest, {
      props: {
        targetTestId,
        text,
        intersectingText,
        ...props,
      },
    }));
  };

  describe("with default props", () => {
    beforeEach(() => renderWithProps());

    it("sets up an IntersectionObserver", async () => {
      expect(IntersectionObserverMock).toHaveBeenCalledOnce();
      expect(IntersectionObserverMock).toHaveBeenCalledWith(intersectionObserverMock.callback, {});
      expect(intersectionObserverMock.observe).toHaveBeenCalledOnce();
    });

    it("emits an event on intersection", async () => {
      const onIntersect = vi.fn();
      component.$on("intersect", onIntersect);
      intersect();
      await waitFor(() => expect(onIntersect).toHaveBeenCalledOnce());
      intersect(false);
      intersect();
      await waitFor(() => expect(onIntersect).toHaveBeenCalledTimes(2));
    });
  });

  describe('with "once" set', () => {
    beforeEach(() => renderWithProps({ props: { once: true } }));
    it("emits an event on the first intersection", async () => {
      const onIntersect = vi.fn();
      component.$on("intersect", onIntersect);
      intersect();
      await waitFor(() => expect(onIntersect).toHaveBeenCalledOnce());
      expect(intersectionObserverMock.unobserve).toHaveBeenCalledOnce();
      intersect(false);
      intersect();
      await waitFor(() => screen.findByText(intersectingText));
      expect(onIntersect).toHaveBeenCalledOnce();
    });
  });
});
