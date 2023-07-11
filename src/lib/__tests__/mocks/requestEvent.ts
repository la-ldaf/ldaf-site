import { vi, type MockedObject, type MockedFunction } from "vitest";
import type { Cookies, RequestEvent } from "@sveltejs/kit";
import { newLogger } from "$lib/logger/private.server";

const mockedCookiesGet: MockedFunction<Cookies["get"]> = vi.fn(
  (..._: Parameters<Cookies["get"]>) => undefined
);

const cookiesDefaults: MockedObject<Cookies> = {
  get: mockedCookiesGet,
  getAll: vi.fn(),
  set: vi.fn(),
  delete: vi.fn(),
  serialize: vi.fn(),
};

export const getRequestEventCookies = (overrides: Partial<Cookies> = {}): Cookies => ({
  ...cookiesDefaults,
  ...overrides,
});

const getRequestEventDefaults = () => ({
  fetch: vi.fn(),
  getClientAddress: vi.fn(() => "127.0.0.1"),
  locals: {
    logger: newLogger(),
  },
  params: {},
  platform: {},
  request: new Request("http://localhost"),
  setHeaders: vi.fn(),
  url: new URL("http://localhost"),
  isDataRequest: false,
  route: {
    id: null,
  },
  cookies: cookiesDefaults,
});

type Overrides<R> = Partial<Omit<R, "cookies" | "locals">> & {
  cookies?: Partial<Cookies>;
  locals?: Partial<App.Locals>;
};

export const getRequestEvent = <R extends RequestEvent>(
  overrides: Overrides<R> = {}
): MockedObject<R> => {
  const ret = {
    ...getRequestEventDefaults(),
    ...overrides,
    cookies: getRequestEventCookies(overrides?.cookies),
  };
  return ret as unknown as MockedObject<R>;
};

export const getURLAndRequest = (url: string) => ({ url: new URL(url), request: new Request(url) });
