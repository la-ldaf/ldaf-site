import { toMatchDOMNodes, toHaveBeenCalledOnceWith } from "./matchers";
import { expect } from "vitest";

interface CustomMatchers<R = unknown> {
  toMatchDOMNodes(expected: HTMLElement | Node[] | string): R;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  toHaveBeenCalledOnceWith(...expected: any[]): R;
}

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-namespace */
  namespace Vi {
    /* eslint-disable @typescript-eslint/no-empty-interface */
    interface Assertion extends CustomMatchers {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
    /* eslint-enable @typescript-eslint/no-empty-interface */
  }

  // Note: augmenting jest.Matchers interface will also work.
}

expect.extend({
  toMatchDOMNodes,
  toHaveBeenCalledOnceWith,
});
