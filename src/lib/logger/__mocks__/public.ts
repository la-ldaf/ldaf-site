import { vi } from "vitest";
import logRawMessageInDevOrTests from "../logRawMessageInDevOrTests";
import { newPublicLogger as newPublicLoggerToWrap, type PublicLoggerInit } from "../public";

export const newPublicLogger = vi.fn((init: PublicLoggerInit) =>
  newPublicLoggerToWrap({
    logRawMessage: vi.fn(logRawMessageInDevOrTests),
    ...init,
  })
);
