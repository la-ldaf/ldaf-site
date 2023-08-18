import type { ServerUserInfo } from "$lib/server/types";
import { vi, type Mock, type MockedObject } from "vitest";
import type { createClient as originalCreateClient } from "..";

export const createClient: Mock<
  Parameters<typeof originalCreateClient>,
  Promise<MockedObject<Awaited<ReturnType<typeof originalCreateClient>>>>
> = vi.fn(async (_) => {
  const userInfos: Record<string, ServerUserInfo> = {};
  const blurhashes: Record<string, string> = {};
  return {
    getUserInfoByToken: vi.fn(async (token) => userInfos[token] ?? null),
    setUserInfoByToken: vi.fn(async (token, userInfo) => (userInfos[token] = userInfo)),
    deleteUserInfoByToken: vi.fn(async (token) => {
      delete userInfos[token];
    }),
    getBlurhashByURL: vi.fn(async (url: string) => blurhashes[url] ?? null),
    setBlurhashByURL: vi.fn(async (url: string, blurhash: string) => {
      blurhashes[url] = blurhash;
    }),
  };
});
