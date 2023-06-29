import { vi, type MockedObject, type MockedFunction } from "vitest";

import type { createClient as createClientOriginal, RedisClientType } from "redis";

export const client = {
  connect: vi.fn(async () => undefined),
  get: vi.fn(async (..._) => null),
  set: vi.fn(async (...args) => "OK"),
  del: vi.fn(async (..._) => 0),
} as unknown as MockedObject<RedisClientType>;

export const createClient: MockedFunction<typeof createClientOriginal> = vi.fn(
  (..._) => client as unknown as RedisClientType
);
