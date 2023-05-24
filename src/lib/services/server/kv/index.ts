import type { Logger } from "$lib/logger/types";
import type { ServerUserInfo } from "$lib/server/types";
import tokenDuration from "$lib/constants/tokenDuration";
import { newLogger } from "$lib/logger/private.server";
import { createClient as createRedisClient } from "redis";

export type Client = {
  getUserInfoByToken: (token: string) => Promise<ServerUserInfo | null>;
  setUserInfoByToken: (token: string, info: ServerUserInfo) => Promise<void>;
  deleteUserInfoByToken: (token: string) => Promise<void>;
  getBlurhashByURL: (url: string) => Promise<string | null>;
  setBlurhashByURL: (url: string, blurhash: string) => Promise<void>;
};

type None = Record<never, never>;

const keys = {
  blurhashByURL: "blurhashByURL",
  userInfoByToken: "ldafUserInfoByToken",
};

type ClientOptions = {
  url: string;
  logger: Logger;
};

type ClientOptionsInit = Partial<ClientOptions>;

const getClientKey = (options: ClientOptions) => options.url;
const clients = new Map<string, Client>();

const defaultURL = "redis://localhost";

export const createClient = async ({
  url = defaultURL,
  logger = newLogger(),
}: ClientOptionsInit = {}): Promise<Client> => {
  const parsedURL = new URL(url);

  // "localhost" is the hostname used when running a redis server locally on the dev machine. "kv"
  // is the hostname used when running in Docker
  const useTLS = !(parsedURL.hostname === "localhost" || parsedURL.hostname === "kv");
  const redisClient = createRedisClient<None, None, None>({
    url: url,
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
        await logger.logError(err);
      }
    };

  const methods: Client = {
    getUserInfoByToken: async (token) => {
      const userInfoJSON = await redisClient.get(`${keys.userInfoByToken}:${token}`);
      if (userInfoJSON === null) return null;
      return JSON.parse(userInfoJSON);
    },
    setUserInfoByToken: async (token, userInfo) => {
      await tryToConnect();
      const userInfoJSON = JSON.stringify(userInfo);
      const result = await redisClient.set(`${keys.userInfoByToken}:${token}`, userInfoJSON, {
        EX: tokenDuration,
      });
      if (result !== "OK") throw new Error("could not set user info in KV store");
    },
    deleteUserInfoByToken: async (token) => {
      await tryToConnect();
      await redisClient.del(`${keys.userInfoByToken}:${token}`);
    },
    getBlurhashByURL: async (url) => await redisClient.get(`${keys.blurhashByURL}:${url}`),
    setBlurhashByURL: async (url, blurhash) => {
      const result = await redisClient.set(`${keys.blurhashByURL}:${url}`, blurhash);
      if (result !== "OK") {
        throw new Error("could not set blurhash in KV store");
      }
    },
  };

  return Object.fromEntries(
    Object.entries(methods).map(([key, fn]) => [key, getMethod(fn)])
  ) as Client;
};

export const getClient = async ({
  url = "redis://localhost",
  logger = newLogger(),
}: ClientOptionsInit = {}) => {
  const clientOptions = { url, logger };
  const key = getClientKey(clientOptions);
  const existingClient = clients.get(key);
  if (existingClient) return existingClient;
  const newClient = await createClient(clientOptions);
  clients.set(key, newClient);
  return newClient;
};
