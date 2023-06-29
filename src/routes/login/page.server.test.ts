import {
  vi,
  expect,
  it,
  describe,
  beforeAll,
  type MockedFunction,
  type MockedObject,
} from "vitest";
import type { RequestEvent } from "./$types";
import { client as redisClient } from "$lib/__tests__/mocks/redis";
import { getRequestEvent, getRequestEventCookies } from "$lib/__tests__/mocks/requestEvent";
import type { ServerUserInfo } from "$lib/server/types";
import tokenDuration from "$lib/constants/tokenDuration";
import type { CurrentUser } from "$lib/types";
import type { Cookies } from "@sveltejs/kit";

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

const getEvent = ({
  body = {},
  fetch = vi.fn((..._) => {
    throw new Error("unexpected fetch!");
  }),
  cookies,
}: {
  body?: Record<string, string | Blob>;
  fetch?: MockedFunction<typeof globalThis.fetch>;
  cookies?: MockedObject<Cookies>;
} = {}): MockedObject<RequestEvent> =>
  getRequestEvent<MockedObject<RequestEvent>>({
    request: new Request("http://localhost/login", {
      method: "POST",
      body: formDataWith(body),
    }),
    route: {
      id: "/login",
    },
    locals: {
      getConnectedRedisClient: vi.fn(async () => redisClient),
    },
    fetch,
    cookies,
  });

const isErrorStatus = (err: unknown, status: number) => {
  if (
    !err ||
    typeof err !== "object" ||
    !("status" in err) ||
    typeof err.status !== "number" ||
    err.status !== status
  ) {
    return false;
  }
  return true;
};

describe("/login", () => {
  let event: MockedObject<RequestEvent>,
    err: unknown,
    result: { success: boolean; currentUser?: CurrentUser };

  describe("no token provided", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent();
      await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    it("responds with a 400 error", () => {
      expect(isErrorStatus(err, 400)).toEqual(true);
    });
    it("does not get a redis client", () =>
      expect(event.locals.getConnectedRedisClient).not.toHaveBeenCalled());
  });

  const expectedBehaviorWithAnyToken = () => {
    it("gets a redis client", () =>
      expect(event.locals.getConnectedRedisClient).toHaveBeenCalledOnce());
    it("requests the user info from Contentful", () =>
      expect(event.fetch).toHaveBeenCalledOnceWith(
        `${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`,
        {
          headers: {
            Authorization: `Bearer ${managementAPIToken}`,
          },
        }
      ));
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
    it("responds with a 400 error", () => expect(isErrorStatus(err, 400)).toEqual(true));
  });

  describe("good token provided", () => {
    beforeAll(async () => {
      err = undefined;
      event = getEvent({
        body: { token: managementAPIToken },
      });
      event.fetch.mockReturnValueOnce(
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
      event.fetch.mockReturnValueOnce(
        Promise.resolve(new Response("401 Unauthorized", { status: 401 }))
      );
      result = await actions.default(event).catch((e) => (err = e));
      return () => vi.restoreAllMocks();
    });
    expectedBehaviorWithAnyToken();
    it("responds with a 401 error", () => expect(isErrorStatus(err, 401)).toEqual(true));
  });
});
