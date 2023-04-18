import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "svelte";
import { vi, describe, it, expect } from "vitest";

import key from "./key";
import IntersectionObserverMock, {
  observe as intersectionObserverObserve,
  callback as intersectionObserverCallback,
  intersect,
} from "./__tests__/IntersectionObserverMock";
import IntersectionObserverTest from "./__tests__/IntersectionObserverTest.svelte";
import * as environment from "$app/environment";

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

vi.mock("$app/environment", () => ({
  browser: false,
}));

const withBrowser = (value = true) => ((environment as Record<"browser", boolean>).browser = value);

beforeEach(() => withBrowser());
afterEach(() => vi.restoreAllMocks());

describe("IntersectionObserver", () => {
  const text = "Not Intersecting";
  const intersectingText = "Intersecting";
  const targetTestId = "intersectionObserverTarget";

  let component: IntersectionObserverTest, target: HTMLElement;

  const renderWithProps = (props?: ComponentProps<IntersectionObserverTest>) => {
    ({ component } = render(IntersectionObserverTest, {
      props: {
        targetTestId,
        text,
        intersectingText,
        ...props,
      },
    }));
    target = screen.getByTestId(targetTestId);
  };

  describe("with default props", () => {
    beforeEach(() => renderWithProps());

    it("sets up an IntersectionObserver", async () => {
      expect(IntersectionObserverMock).toHaveBeenCalledOnce();
      expect(IntersectionObserverMock).toHaveBeenCalledWith(intersectionObserverCallback, {});
      expect(intersectionObserverObserve).toHaveBeenCalledOnce();
    });

    it("emits an event on intersection", async () => {
      const onIntersect = vi.fn();
      component.$on("intersect", onIntersect);
      intersect([{ target, isIntersecting: true }]);
      await waitFor(() => expect(onIntersect).toHaveBeenCalledOnce());
      intersect([{ target, isIntersecting: false }]);
      intersect([{ target, isIntersecting: true }]);
      await waitFor(() => expect(onIntersect).toHaveBeenCalledTimes(2));
    });
  });

  describe('with "once" set', () => {
    beforeEach(() => renderWithProps({ props: { once: true } }));
    it("emits an event on the first intersection", async () => {
      const onIntersect = vi.fn();
      component.$on("intersect", onIntersect);
      intersect([{ target, isIntersecting: true }]);
      await waitFor(() => expect(onIntersect).toHaveBeenCalledOnce());
      intersect([{ target, isIntersecting: false }]);
      intersect([{ target, isIntersecting: true }]);
      await waitFor(() => screen.findByText(intersectingText));
      expect(onIntersect).toHaveBeenCalledOnce();
    });
  });
});
