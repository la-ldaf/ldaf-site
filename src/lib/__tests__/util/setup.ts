import { vi, beforeAll } from "vitest";

type SetupReturnTypes = void | undefined | (() => void);
const setup = (fn: () => SetupReturnTypes | Promise<SetupReturnTypes>) => {
  beforeAll(async () => {
    const providedCleanupFunction = await fn();
    return providedCleanupFunction
      ? () => {
          providedCleanupFunction();
          vi.restoreAllMocks();
        }
      : () => vi.restoreAllMocks();
  });
};

export default setup;
