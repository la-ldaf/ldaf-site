import { vi, type MockedObject, type MockedFunction } from "vitest";
import type { Cookies, RequestEvent } from "@sveltejs/kit";
import { createClient as createKVClient, type Client as KVClient } from "$lib/services/server/kv";

const mockedCookiesGet: MockedFunction<Cookies["get"]> = vi.fn(
  (..._: Parameters<Cookies["get"]>) => undefined as string | undefined,
);

const getCookiesDefaults: () => MockedObject<Cookies> = () => ({
  get: mockedCookiesGet,
  getAll: vi.fn(),
  set: vi.fn(),
  delete: vi.fn(),
  serialize: vi.fn(),
});

const getRequestEventCookies = (
  cookies: Record<string, string> = {},
  mocks: Partial<Cookies> = {},
): Cookies => {
  const defaults = getCookiesDefaults();
  return {
    ...defaults,
    ...mocks,
    get: vi.fn((name: string) => cookies[name] ?? (mocks?.get ?? defaults.get)?.(name)),
  };
};

const getRequestEventDefaults = ({ url = "http://localhost" }: { url?: string | URL } = {}) => {
  let kvClient: KVClient;
  return {
    fetch: vi.fn(),
    getClientAddress: vi.fn(() => "127.0.0.1"),
    locals: {
      getKVClient: vi.fn(async () => {
        if (kvClient) return kvClient;
        kvClient = await createKVClient();
        return kvClient;
      }),
    },
    params: {},
    platform: {},
    request: new Request(url),
    setHeaders: vi.fn(),
    url: new URL(url),
    isDataRequest: false,
    route: {
      id: null,
    },
    cookies: getCookiesDefaults(),
  };
};

type Overrides<R> = Partial<Omit<R, "cookies" | "locals" | "url">> & {
  cookies?: Record<string, string>;
  cookieMocks?: Partial<Cookies>;
  locals?: Partial<App.Locals>;
  url?: URL | string;
};

const getRequestEvent = <R extends RequestEvent>(overrides: Overrides<R> = {}): MockedObject<R> => {
  const defaults = getRequestEventDefaults({ url: overrides.url });
  const ret = {
    ...defaults,
    ...overrides,
    ...(overrides.url ? { url: new URL(overrides.url) } : {}),
    locals: { ...defaults.locals, ...overrides?.locals },
    cookies: getRequestEventCookies(overrides?.cookies, overrides?.cookieMocks),
  };
  return ret as unknown as MockedObject<R>;
};

export default getRequestEvent;
