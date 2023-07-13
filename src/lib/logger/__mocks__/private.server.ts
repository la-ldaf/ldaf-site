import { vi } from "vitest";
import logRawMessageInDevOrTests from "../logRawMessageInDevOrTests";
import { newLogger as newLoggerToWrap, type LoggerInit } from "../private.server";

export const newLogger = vi.fn((init: LoggerInit) =>
  newLoggerToWrap({
    logRawMessage: vi.fn(logRawMessageInDevOrTests),
    ...init,
  })
);
