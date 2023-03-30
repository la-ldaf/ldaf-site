import toMatchDOM from "./matchers/toMatchDOM";
import { expect } from "vitest";

interface CustomMatchers<R = unknown> {
  toMatchDOM(expected: HTMLElement | string): R;
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

expect.extend({ toMatchDOM });
