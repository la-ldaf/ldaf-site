import { createClient as createRedisClient } from "redis";

export type Client = {
  getBlurhashByURL: (url: string) => Promise<string | null>;
  setBlurhashByURL: (url: string, blurhash: string) => Promise<void>;
};

type None = Record<never, never>;

const keys = {
  blurhashByURL: "blurhashByURL",
};

export const createClient = async ({
  url = "redis://localhost",
}: { url?: string } = {}): Promise<Client> => {
  const parsedURL = new URL(url);
  // "localhost" is the hostname used when running a redis server locally on the dev machine. "kv"
  // is the hostname used when running in Docker
  const useTLS = !(parsedURL.hostname === "localhost" || parsedURL.hostname === "kv");
  let redisClientError: undefined | unknown;
  const redisClient = createRedisClient<None, None, None>({
    url,
    socket: { tls: useTLS },
  });
  redisClient.on("error", (err) => {
    console.error(err);
    redisClientError = err;
  });
  try {
    await redisClient.connect();
  } catch (err) {
    console.error(err);
    redisClientError = err;
  }
  return {
    getBlurhashByURL: async (url) => {
      if (redisClientError) throw redisClientError;
      return redisClient.get(`${keys.blurhashByURL}:${url}`);
    },
    setBlurhashByURL: async (url, blurhash) => {
      if (redisClientError) throw redisClientError;
      const result = await redisClient.set(`${keys.blurhashByURL}:${url}`, blurhash);
      if (result !== "OK") throw new Error("could not set blurhash in KV store");
    },
  };
};
