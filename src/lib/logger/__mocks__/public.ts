import { vi } from "vitest";
import logRawMessageToConsole from "../logRawMessageToConsole";
import { newPublicLogger as newPublicLoggerToWrap, type PublicLoggerInit } from "../public";

export const newPublicLogger = vi.fn((init: PublicLoggerInit) =>
  newPublicLoggerToWrap({
    logRawMessage: vi.fn(logRawMessageToConsole),
    ...init,
  })
);
