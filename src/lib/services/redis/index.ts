import { createClient as createRedisClient, type RedisClientType } from "redis";

type None = Record<never, never>;

export const createConnectedRedisClient = async ({
  url,
  /* onError, */
  useTLS = false,
}: {
  url: string;
  useTLS: boolean;
  /* onError: (err: unknown) => void; */
}): Promise<RedisClientType> => {
  const client = createRedisClient<None, None, None>({
    url,
    socket: { tls: useTLS },
  });
  /* client.on("error", onError); */
  await client.connect();
  return client;
};
