import { isMockFunction, type MockedFunction } from "@vitest/spy";
import { utilInspect } from "@vitest/utils";

export const toHaveBeenCalledOnceWith = function (
  this: {
    isNot: boolean;
    equals: (a: unknown, b: unknown) => boolean;
    utils: {
      stringify: (value: unknown, maxDepth?: number, options?: { maxLength?: number }) => string;
    };
  },
  /* eslint-disable @typescript-eslint/no-explicit-any */
  received: MockedFunction<(...args: any[]) => any>,
  ...expected: any[] /* eslint-enable @typescript-eslint/no-explicit-any */
) {
  const {
    isNot,
    equals,
    utils: { stringify },
  } = this;

  if (!isMockFunction(received)) {
    throw new TypeError(`${utilInspect(received)} is not a spy or a call to a spy!`);
  }

  if (!isNot && received.mock.calls.length === 0) {
    return {
      pass: false,
      message: () => `Expected ${stringify(received)} to be called.`,
    };
  }

  if (isNot && received.mock.calls.length === 1) {
    return {
      pass: false,
      message: () =>
        `Expected ${stringify(received)} to not be called or to be called more than once.`,
    };
  }

  if (!isNot && received.mock.calls.length > 1) {
    return {
      pass: false,
      message: () =>
        `Expected ${stringify(received)} ${isNot ? "not " : ""}to be called only once (was called ${
          received.mock.calls.length
        } times)`,
    };
  }

  return {
    pass: equals(received.mock.calls[0], expected),
    message: () =>
      `Expected ${stringify(received)} ${
        isNot ? "not " : ""
      }to be called with arguments: ${stringify(expected, 1, { maxLength: 20 })
        .replaceAll(/\s+/g, " ")
        .replace(/^Array /, "")}`,
    actual: received.mock.calls[0],
    expected,
  };
};
