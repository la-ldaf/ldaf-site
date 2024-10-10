import type { ServerUser } from "$lib/server/types";
import { vi } from "vitest";
import type { YoutubeVideoData } from "$lib/services/server/youtube";
import type { FireWeatherData } from "../../../../../routes/api/v1/fire-weather/+server";

export const createClient = vi.fn(async () => {
  const userInfos: Record<string, ServerUser | null> = {};
  const blurhashes: Record<string, string> = {};
  const youtubeVideoDatas: Record<string, YoutubeVideoData> = {};
  let fireWeatherData: FireWeatherData = { parishes: [], lastUpdated: "" };
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
    setFireWeatherData: vi.fn(async (fireData: FireWeatherData) => {
      fireWeatherData = fireData;
    }),
    getFireWeatherData: vi.fn(async () => fireWeatherData),
  };
});
