import { vi, type MockedObject, type MockedFunction } from "vitest";

import type { createClient as createClientOriginal, RedisClientType } from "redis";

export const client: MockedObject<Pick<RedisClientType, "connect" | "get" | "del">> = {
  connect: vi.fn(async () => undefined),
  get: vi.fn(async (..._) => null),
  del: vi.fn(async (..._) => 0),
};

export const createClient: MockedFunction<typeof createClientOriginal> = vi.fn(
  (..._) => client as unknown as RedisClientType
);
