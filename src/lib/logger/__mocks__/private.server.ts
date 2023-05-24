import { vi } from "vitest";
import logRawMessageToConsole from "../logRawMessageToConsole";
import { newLogger as newLoggerToWrap, type LoggerInit } from "../private.server";

export const newLogger = vi.fn((init: LoggerInit) =>
  newLoggerToWrap({
    logRawMessage: vi.fn(logRawMessageToConsole),
    ...init,
  })
);
