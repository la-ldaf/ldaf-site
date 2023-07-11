import { createClient as createRedisClient, type RedisClientType } from "redis";

type None = Record<never, never>;

export const createConnectedRedisClient = async ({
  url,
  useTLS = false,
}: {
  url: string;
  useTLS: boolean;
}): Promise<RedisClientType> => {
  const client = createRedisClient<None, None, None>({
    url,
    socket: { tls: useTLS },
  });
  await client.connect();
  return client;
};
