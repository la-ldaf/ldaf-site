import { createClient as createRedisClient } from "redis";
import type { YoutubeVideoData } from "$lib/services/server/youtube";
import type { ServerUser } from "$lib/server/types";
import tokenDuration from "$lib/constants/tokenDuration";

export type Client = {
  getBlurhashByURL: (url: string) => Promise<string | null>;
  setBlurhashByURL: (url: string, blurhash: string) => Promise<void>;
  getYoutubeVideoDataByID: (id: string) => Promise<YoutubeVideoData | null>;
  setYoutubeVideoDataByID: (id: string, data: YoutubeVideoData) => Promise<void>;
  getUserInfoByToken: (token: string) => Promise<ServerUser | null>;
  setUserInfoByToken: (token: string, userInfo: ServerUser) => Promise<void>;
  deleteUserInfoByToken: (token: string) => Promise<void>;
};

type None = Record<never, never>;

const keys = {
  blurhashByURL: "blurhashByURL",
  youtubeVideoDataByID: "youtubeVideoDataByID",
  userInfoByToken: "ldafUserInfoByToken",
};

type ClientOptions = {
  url: string;
};

type ClientOptionsInit = Partial<ClientOptions>;

const getClientKey = (options: ClientOptions) => options.url;
const clients = new Map<string, Client>();

const defaultURL = "redis://localhost";

export const createClient = async ({
  url = defaultURL,
}: ClientOptionsInit = {}): Promise<Client> => {
  const parsedURL = new URL(url);

  // "localhost" is the hostname used when running a redis server locally on the dev machine. "kv"
  // is the hostname used when running in Docker
  const useTLS = !(parsedURL.hostname === "localhost" || parsedURL.hostname === "kv");
  const redisClient = createRedisClient<None, None, None>({
    url,
    socket: { tls: useTLS },
  });

  redisClient.on("error", (err) => {
    console.error(err);
  });

  const tryToConnect = async () => {
    if (redisClient.isOpen) return;
    try {
      await redisClient.connect();
    } catch (err) {
      console.error(err);
    }
  };

  tryToConnect();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyAsyncFunction = (...args: any[]) => Promise<any>;

  const getMethod =
    <F extends AnyAsyncFunction>(fn: F) =>
    async (...args: Parameters<F>) => {
      try {
        await tryToConnect();
        return await fn(...args);
      } catch (err) {
        // TODO: better logging
        console.error(err);
      }
    };

  const methods: Client = {
    getBlurhashByURL: async (url) => await redisClient.get(`${keys.blurhashByURL}:${url}`),
    setBlurhashByURL: async (url, blurhash) => {
      const result = await redisClient.set(`${keys.blurhashByURL}:${url}`, blurhash);
      if (result !== "OK") throw new Error("could not set blurhash in KV store");
    },
    getYoutubeVideoDataByID: async (id) => {
      const json = await redisClient.get(`${keys.youtubeVideoDataByID}:${id}`);
      if (!json) return json;
      return JSON.parse(json);
    },
    setYoutubeVideoDataByID: async (id, videoData) => {
      const result = await redisClient.set(
        `${keys.youtubeVideoDataByID}:${id}`,
        JSON.stringify(videoData),
      );
      if (result !== "OK") throw new Error("could not set youtube video data in KV store");
    },
    getUserInfoByToken: async (token) => {
      const userInfoJSON = await redisClient.get(`${keys.userInfoByToken}:${token}`);
      if (userInfoJSON === null) return null;
      return JSON.parse(userInfoJSON);
    },
    setUserInfoByToken: async (token, userInfo) => {
      const userInfoJSON = JSON.stringify(userInfo);
      const result = await redisClient.set(`${keys.userInfoByToken}:${token}`, userInfoJSON, {
        EX: tokenDuration,
      });
      if (result !== "OK") throw new Error("could not set user info in KV store");
    },
    deleteUserInfoByToken: async (token) => {
      await redisClient.del(`${keys.userInfoByToken}:${token}`);
    },
  };

  return Object.fromEntries(
    Object.entries(methods).map(([key, fn]) => [key, getMethod(fn)]),
  ) as Client;
};

export const getClient = async ({ url = "redis://localhost" }: ClientOptionsInit = {}) => {
  const clientOptions = { url };
  const key = getClientKey(clientOptions);
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;
  const newClient = await createClient(clientOptions);
  clients.set(key, newClient);
  return newClient;
};
