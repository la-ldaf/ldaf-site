import { vi, expect, it, describe, type MockedFunction } from "vitest";
import setup from "$lib/__tests__/util/setup";
import type { RequestEvent } from "./$types";
import getRequestEvent from "$lib/__tests__/util/getRequestEvent";
import tokenDuration from "$lib/constants/tokenDuration";
import { newLogger } from "$lib/logger/private.server";

vi.mock("$lib/services/server/kv");

import { createClient as createKVClient, type Client as KVClient } from "$lib/services/server/kv";

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
  kvClient,
}: {
  body?: Record<string, string | Blob>;
  fetch?: typeof globalThis.fetch;
  cookies?: Record<string, string>;
  kvClient?: KVClient;
} = {}): RequestEvent => {
  const logger = newLogger();
  return getRequestEvent<RequestEvent>({
    request: new Request("http://localhost/login", {
      method: "POST",
      body: formDataWith(body),
    }),
    route: {
      id: "/login",
    },
    locals: {
      logger,
      getKVClient: vi.fn(async () => kvClient ?? createKVClient({ logger })),
    },
    fetch,
    cookies,
  });
};

const getErrorStatus = (err: unknown): null | number => {
  if (!err || typeof err !== "object" || !("status" in err) || typeof err.status !== "number") {
    return null;
  }
  return err.status;
};

const expectedBehaviorWithAnyToken = (getEvent: () => RequestEvent) => {
  it("gets a redis client", () => expect(getEvent().locals.getKVClient).toHaveBeenCalledOnce());
  it("requests the user info from Contentful", () =>
    expect(fetch).toHaveBeenCalledOnceWith(`${CONTENTFUL_MANAGEMENT_API_ENDPOINT}/users/me`, {
      headers: {
        Authorization: `Bearer ${managementAPIToken}`,
      },
    }));
};

const catcher = vi.fn(() => undefined);

describe("/login", () => {
  describe("no token provided", () => {
    let event: RequestEvent, result: Awaited<ReturnType<typeof actions.default>> | undefined;
    setup(async () => {
      event = getEvent();
      result = await actions.default(event).catch(catcher);
    });
    it("fails with a 400 error", () =>
      expect(result).toMatchObject({
        data: {
          success: false,
        },
        status: 400,
      }));
    it("does not throw", () => expect(catcher).not.toHaveBeenCalled);
    it("does not get a kv client", () => expect(event.locals.getKVClient).not.toHaveBeenCalled());
  });

  describe("already logged in", () => {
    let event: RequestEvent, result: Awaited<ReturnType<typeof actions.default>> | undefined;
    setup(async () => {
      event = getEvent({
        body: { token: managementAPIToken },
        cookies: { ldafUserToken: randomUUID },
      });
      result = await actions.default(event).catch(catcher);
    });
    it("responds with a 400 error", () =>
      expect(result).toMatchObject({
        status: 400,
        data: {
          success: false,
        },
      }));
    it("does not throw", () => expect(catcher).not.toHaveBeenCalled);
  });

  describe("good token provided", () => {
    let event: RequestEvent,
      result: Awaited<ReturnType<typeof actions.default>>,
      kvClient: KVClient;
    setup(async () => {
      kvClient = await createKVClient({ url: "redis://localhost" });
      event = getEvent({
        body: { token: managementAPIToken },
        kvClient,
      });
      fetch.mockReturnValueOnce(
        Promise.resolve(new Response(JSON.stringify(testUserContentfulResponse)))
      );
      result = await actions.default(event);
    });
    expectedBehaviorWithAnyToken(() => event);
    it("sets the user info in Redis", () =>
      expect(kvClient.setUserInfoByToken).toHaveBeenCalledWith(randomUUID, {
        ...testUser,
        managementAPIToken,
      }));
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
    let event: RequestEvent, err: unknown;
    const dontCall = vi.fn();
    setup(async () => {
      err = undefined;
      event = getEvent({ body: { token: managementAPIToken } });
      fetch.mockReturnValueOnce(Promise.resolve(new Response("401 Unauthorized", { status: 401 })));
      await actions
        .default(event)
        .then(dontCall)
        .catch((e) => (err = e));
    });
    expectedBehaviorWithAnyToken(() => event);
    it("rejects", () => expect(dontCall).not.toHaveBeenCalled());
    it("responds with a 401 error", () => expect(getErrorStatus(err)).toEqual(401));
  });
});
