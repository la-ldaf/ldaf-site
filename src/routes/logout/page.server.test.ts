import getRequestEvent from "$lib/__tests__/util/getRequestEvent";
import { vi, beforeAll, type MockedObject } from "vitest";
import type { RequestEvent } from "./$types";
import { createClient as createKVClient, type Client as KVClient } from "$lib/services/server/kv";
import { actions } from "./+page.server";

const ldafUserToken = "4d196bda-c147-43bf-89ad-2f0249f14c56";

const getEvent = ({
  cookies = {},
  kvClient,
}: { cookies?: Record<string, string>; kvClient?: KVClient } = {}) => {
  return getRequestEvent<MockedObject<RequestEvent>>({
    request: new Request("http://localhost/logout", {
      method: "POST",
    }),
    route: {
      id: "/logout",
    },
    locals: {
      getKVClient: vi.fn(async () => kvClient ?? createKVClient()),
    },
    cookies,
  });
};

describe("not logged in", () => {
  let event: RequestEvent, result: { success: boolean }, kvClient: KVClient;
  beforeAll(async () => {
    kvClient = await createKVClient();
    event = getEvent({ kvClient });
    result = await actions.default(event);
  });
  it("succeeds", () => expect(result.success).toEqual(true));
  it("does not call redis", () => expect(kvClient.deleteUserInfoByToken).not.toHaveBeenCalled());
});

describe("logged in", () => {
  let event: RequestEvent, result: { success: boolean }, kvClient: KVClient;
  beforeAll(async () => {
    kvClient = await createKVClient();
    event = getEvent({ kvClient, cookies: { ldafUserToken } });
    result = await actions.default(event);
  });
  it("succeeds", () => expect(result.success).toEqual(true));
  it("deletes the redis entry", () =>
    expect(kvClient.deleteUserInfoByToken).toHaveBeenCalledOnceWith(ldafUserToken));
});
