import { getRequestEvent, getRequestEventCookies } from "$lib/__tests__/mocks/requestEvent";
import { vi, beforeAll, type MockedObject } from "vitest";
import type { RequestEvent } from "./$types";
import { client as redisClient } from "$lib/__tests__/mocks/redis";
import { newLogger } from "$lib/logger/private.server";

const { actions } = await import("./+page.server");

const ldafUserToken = "4d196bda-c147-43bf-89ad-2f0249f14c56";

const getEvent = ({ cookies = {} }: { cookies?: Record<string, string> } = {}) =>
  getRequestEvent<MockedObject<RequestEvent>>({
    request: new Request("http://localhost/logout", {
      method: "POST",
    }),
    route: {
      id: "/logout",
    },
    locals: {
      logger: newLogger(),
      getConnectedRedisClient: vi.fn(async () => redisClient),
    },
    cookies: getRequestEventCookies({
      get: vi.fn((name: string) => (cookies ?? {})[name]),
    }),
  });

describe("/logout", () => {
  let event: RequestEvent, result: { success: boolean };
  describe("not logged in", () => {
    beforeAll(async () => {
      event = getEvent();
      result = await actions.default(event);
    });
    it("succeeds", () => expect(result.success).toEqual(true));
    it("does not call redis", () => expect(redisClient.del).not.toHaveBeenCalled());
  });

  describe("logged in", () => {
    beforeAll(async () => {
      event = getEvent({ cookies: { ldafUserToken } });
      result = await actions.default(event);
    });
    it("succeeds", () => expect(result.success).toEqual(true));
    it("deletes the redis entry", () =>
      expect(redisClient.del).toHaveBeenCalledOnceWith(`ldafUserInfoByToken:${ldafUserToken}`));
  });
});
