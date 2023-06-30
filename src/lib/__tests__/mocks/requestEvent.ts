import { vi, type MockedObject, type MockedFunction } from "vitest";
import type { Cookies, RequestEvent } from "@sveltejs/kit";

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

export const getRequestEventCookies = (
  overrides: Partial<MockedObject<Cookies>> = {}
): MockedObject<Cookies> => ({
  ...cookiesDefaults,
  ...overrides,
});

const getRequestEventDefaults = () => ({
  fetch: vi.fn(),
  getClientAddress: vi.fn(() => "127.0.0.1"),
  locals: {},
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

export const getRequestEvent = <R extends RequestEvent>(
  overrides: Partial<MockedObject<R>> & {
    cookies?: Partial<MockedObject<Cookies>>;
    locals?: Partial<MockedObject<App.Locals>>;
  } = {}
): MockedObject<R> => {
  const ret = {
    ...getRequestEventDefaults(),
    ...overrides,
    cookies: getRequestEventCookies(overrides?.cookies),
  };
  ret.locals;
  return ret as unknown as MockedObject<R> & { cookies: MockedObject<Cookies> };
};

export const getURLAndRequest = (url: string) => ({ url: new URL(url), request: new Request(url) });
