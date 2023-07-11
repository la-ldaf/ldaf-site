import { vi, expect, it, describe, beforeAll, type MockedFunction } from "vitest";
import type { RequestEvent } from "./$types";
import { client as redisClient } from "$lib/__tests__/mocks/redis";
import { getRequestEvent, getRequestEventCookies } from "$lib/__tests__/mocks/requestEvent";
import type { ServerUserInfo } from "$lib/server/types";
import tokenDuration from "$lib/constants/tokenDuration";
import type { Cookies } from "@sveltejs/kit";
import { newLogger } from "$lib/logger/private.server";

const env = {
  CONTENTFUL_MANAGEMENT_API_ENDPOINT: "http://localhost/contentful",
};

const { CONTENTFUL_MANAGEMENT_API_ENDPOINT } = env;

vi.doMock("$env/static/private", () => env);

const { actions } = await import("./+page.server");

const managementAPIToken = "MANAGEMENT_API_TOKEN";

const formDataWith = (obj: Record<string, string | Blob> = {}) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => formData.append(key, value));
  return formData;
};

const testUser = {
  email: "test@example.com",
  name: "test example",
  avatarURL: "http://example.com",
};

const testUserContentfulResponse = {
  ...testUser,
  firstName: "test",
  lastName: "example",
  avatarUrl: testUser.avatarURL,
};

const randomUUID = "4d196bda-c147-43bf-89ad-2f0249f14c56";
vi.stubGlobal("crypto", { randomUUID: () => randomUUID });

const fetch: MockedFunction<typeof globalThis.fetch> = vi.fn((..._) => {
  throw new Error("unexpected fetch!");
});
const _fetch = fetch;

const getEvent = ({
  body = {},
  fetch = _fetch,
  cookies,
}: {
  body?: Record<string, string | Blob>;
  fetch?: typeof globalThis.fetch;
  cookies?: Cookies;
} = {}): RequestEvent =>
  getRequestEvent<RequestEvent>({
    request: new Request("http://localhost/login", {
      method: "POST",
      body: formDataWith(body),
    }),
    route: {
      id: "/login",
    },
    locals: {
      logger: newLogger(),
      getConnectedRedisClient: vi.fn(async () => redisClient),
    },
    fetch,
    cookies,
  });

const getErrorStatus = (err: unknown): null | number => {
  if (!err || typeof err !== "object" || !("status" in err) || typeof err.status !== "number") {
    return null;
  }
  return err.status;
};

describe("/login", () => {
  let event: RequestEvent, err: unknown, result: Awaited<ReturnType<typeof actions.default>>;

  describe("no token provided", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent();
      result = await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    it("fails with a 400 error", () =>
      expect(result).toMatchObject({
        data: {
          success: false,
        },
        status: 400,
      }));
    it("does not get a redis client", () =>
      expect(event.locals.getConnectedRedisClient).not.toHaveBeenCalled());
  });

  const expectedBehaviorWithAnyToken = () => {
    it("gets a redis client", () =>
      expect(event.locals.getConnectedRedisClient).toHaveBeenCalledOnce());
    it("requests the user info from Contentful", () =>
      expect(fetch).toHaveBeenCalledOnceWith(`${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`, {
        headers: {
          Authorization: `Bearer ${managementAPIToken}`,
        },
      }));
  };

  describe("already logged in", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent({
        body: { token: managementAPIToken },
        cookies: getRequestEventCookies({
          get: vi.fn((name: string) => ({ ldafUserToken: randomUUID }[name])),
        }),
      });
      result = await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    it("responds with a 400 error", () =>
      expect(result).toMatchObject({
        status: 400,
        data: {
          success: false,
        },
      }));
  });

  describe("good token provided", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent({
        body: { token: managementAPIToken },
      });
      fetch.mockReturnValueOnce(
        Promise.resolve(new Response(JSON.stringify(testUserContentfulResponse)))
      );
      result = await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    expectedBehaviorWithAnyToken();
    it("sets the user info in Redis", () =>
      expect(redisClient.set).toHaveBeenCalledWith(
        `ldafUserInfoByToken:${randomUUID}`,
        JSON.stringify({ ...testUser, managementAPIToken } satisfies ServerUserInfo),
        { EX: tokenDuration }
      ));
    it("returns success and currentUser", () =>
      expect(result).toEqual({ success: true, currentUser: testUser }));
    it("sets the cookie", () =>
      expect(event.cookies.set).toHaveBeenCalledOnceWith("ldafUserToken", randomUUID, {
        maxAge: tokenDuration,
        path: "/",
        sameSite: "none",
      }));
  });

  describe("bad token provided", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent({ body: { token: managementAPIToken } });
      fetch.mockReturnValueOnce(Promise.resolve(new Response("401 Unauthorized", { status: 401 })));
      result = await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    expectedBehaviorWithAnyToken();
    it("responds with a 401 error", () => expect(getErrorStatus(err)).toEqual(401));
  });
});
