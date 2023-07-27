import type { Handle } from "@sveltejs/kit";
import { KV_URL } from "$env/static/private";
import { createClient as createRedisClient, type RedisClientType } from "redis";
import { sequence } from "@sveltejs/kit/hooks";

export { default as handleError } from "./hooks/server/handleError";

import handleCSP from "./hooks/server/handleCSP";
import handlePreload from "./hooks/server/handlePreload";
import handleSetupLogger from "./hooks/server/handleSetupLogger";
import handleSetupKVClient from "./hooks/server/handleSetupKVClient";
import handleToken from "./hooks/server/handleToken";

type None = Record<never, never>;

const createConnectedRedisClient = async ({
  url,
  useTLS = false,
}: {
  url: string;
  useTLS: boolean;
}): Promise<RedisClientType<None, None, None> | undefined> => {
  let client: RedisClientType<None, None, None>;
  try {
    client = createRedisClient<None, None, None>({
      url,
      socket: { tls: useTLS },
    });
    await client.connect();
  } catch (_) {
    return;
  }
  return client;
};

const handleSetupRedisClient = (async ({ event, resolve }) => {
  // we intentionally don't await this promise here, so that other things can happen while redis is
  // initializing. Anything that needs redis can await the promise by calling
  // event.locals.getConnectedRedisClient() and awaiting the result. If nothing awaits the promise
  // then we never wait on redis connecting first.
  const redisClientPromise = !KV_URL
    ? Promise.reject(new Error("could not get redis client"))
    : createConnectedRedisClient({ url: KV_URL, useTLS: !KV_URL.startsWith("redis://localhost") });

  // So we don't get unhandled promise rejection warnings if nothing awaits the promise
  redisClientPromise.catch((err) => console.error(err));

  event.locals.getConnectedRedisClient = async () => redisClientPromise;

  return resolve(event);
}) satisfies Handle;

export const handle = sequence(
  handleSetupRedisClient,
  handleSetupLogger,
  handleSetupKVClient,
  handlePreload,
  handleToken,
  handleCSP
);
