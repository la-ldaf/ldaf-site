import type { ServerUser } from "$lib/server/types";
import { vi, type Mock, type MockedObject } from "vitest";
import type { createClient as originalCreateClient } from "..";
import type { YoutubeVideoData } from "$lib/services/server/youtube";

export const createClient: Mock<
  Parameters<typeof originalCreateClient>,
  Promise<MockedObject<Awaited<ReturnType<typeof originalCreateClient>>>>
> = vi.fn(async (_) => {
  const userInfos: Record<string, ServerUser> = {};
  const blurhashes: Record<string, string> = {};
  const youtubeVideoDatas: Record<string, YoutubeVideoData> = {};
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
    getYoutubeVideoDataByID: vi.fn(async (id: string) => youtubeVideoDatas[id] ?? null),
    setYoutubeVideoDataByID: vi.fn(async (id: string, data: YoutubeVideoData) => {
      youtubeVideoDatas[id] = data;
    }),
  };
});
