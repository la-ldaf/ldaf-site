import { vi } from "vitest";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";

const logMessage = vi.fn(async (message: string) => console.log("LOG: ", message));

const logError = vi.fn(async (error: unknown) =>
  console.log("LOG: ERROR: ", getErrorMessage(error))
);

const logErrorResponse = vi.fn(async (response: Response) => {
  const errorMessage = response.bodyUsed
    ? "[body already used; can't retrieve any error message that may exist]"
    : getErrorMessageFromResponse(response);
  console.log("LOG: ERROR RESPONSE: ", errorMessage);
});

export const logger = {
  logMessage,
  logError,
  logErrorResponse,
  setPublicContext: vi.fn(),
  setContext: vi.fn(),
};

export const newLogger = vi.fn(() => logger);

export const publicLogger = {
  logMessage,
  logError,
  logErrorResponse,
  setPublicContext: vi.fn(),
};

export const newPublicLogger = vi.fn(() => publicLogger);
