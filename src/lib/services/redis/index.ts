import { createClient as createRedisClient, type RedisClientType } from "redis";

export const createConnectedRedisClient = async ({
  url,
  useTLS = false,
}: {
  url: string;
  useTLS: boolean;
}): Promise<RedisClientType | undefined> => {
  let client: RedisClientType;
  try {
    client = createRedisClient({
      url,
      socket: { tls: useTLS },
    });
    await client.connect();
  } catch (_) {
    return;
  }
  return client;
};
