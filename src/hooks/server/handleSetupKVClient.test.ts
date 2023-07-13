import { vi } from "vitest";
import setup from "$lib/__tests__/util/setup";

vi.mock("$lib/services/server/kv");

import { createClient } from "$lib/services/server/kv";
import { getHandleSetupKVClient } from "./handleSetupKVClient";
import getRequestEvent from "$lib/__tests__/util/getRequestEvent";
import type { RequestEvent } from "@sveltejs/kit";
import { newLogger } from "$lib/logger/private.server";

const resolve = vi.fn();

describe("with a KV_URL", () => {
  let event: RequestEvent;
  setup(async () => {
    event = getRequestEvent();
    const setupKVClient = getHandleSetupKVClient({ env: { KV_URL: "redis://foobar" } });
    await setupKVClient({ event, resolve });
  });
  it("gets a connected client", () =>
    expect(createClient).toHaveBeenCalledOnceWith({
      url: "redis://foobar",
      logger: expect.anything(),
    }));
  it("provides the connected client in the event locals", async () =>
    expect(await event.locals.getKVClient()).toBeDefined());
  it("resolves", () => expect(resolve).toHaveBeenCalledOnceWith(event));
});
