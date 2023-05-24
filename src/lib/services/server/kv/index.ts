import type { Logger } from "$lib/logger/types";
import type { ServerUserInfo } from "$lib/server/types";
import tokenDuration from "$lib/constants/tokenDuration";
import { newLogger } from "$lib/logger/private.server";
import { createClient as createRedisClient } from "redis";

export type Client = {
  getUserInfoByToken: (token: string) => Promise<ServerUserInfo | null>;
  setUserInfoByToken: (token: string, info: ServerUserInfo) => Promise<void>;
  deleteUserInfoByToken: (token: string) => Promise<void>;
};

type None = Record<never, never>;

const keys = {
  userInfoByToken: "ldafUserInfoByToken",
};

export const createClient = async ({
  url = "redis://localhost",
  logger = newLogger(),
}: {
  url?: string;
  logger?: Logger;
} = {}): Promise<Client> => {
  const parsed = new URL(url);
  const useTLS = !(parsed.hostname === "localhost" || parsed.hostname === "kv");
  let redisClientError: undefined | unknown;
  const redisClient = createRedisClient<None, None, None>({
    url: url,
    socket: { tls: useTLS },
  });
  redisClient.on("error", (err) => (redisClientError = err));
  try {
    await redisClient.connect();
  } catch (err) {
    logger.logError(err);
    redisClientError = err;
  }
  return {
    getUserInfoByToken: async (token) => {
      if (redisClientError) throw redisClientError;
      const userInfoJSON = await redisClient.get(`${keys.userInfoByToken}:${token}`);
      if (userInfoJSON === null) return null;
      return JSON.parse(userInfoJSON);
    },
    setUserInfoByToken: async (token, userInfo) => {
      if (redisClientError) throw redisClientError;
      const userInfoJSON = JSON.stringify(userInfo);
      const result = await redisClient.set(`${keys.userInfoByToken}:${token}`, userInfoJSON, {
        EX: tokenDuration,
      });
      if (result !== "OK") throw new Error("could not set user info in KV store");
    },
    deleteUserInfoByToken: async (token) => {
      if (redisClientError) throw redisClientError;
      await redisClient.del(`${keys.userInfoByToken}:${token}`);
    },
  };
};
