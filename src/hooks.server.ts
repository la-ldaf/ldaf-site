import type { Handle } from "@sveltejs/kit";
import { KV_URL } from "$env/static/private";
import { createClient as createRedisClient, type RedisClientType } from "redis";
import { sequence } from "@sveltejs/kit/hooks";

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

const handlePreload = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    preload: ({ type, path }) =>
      type === "js" ||
      type === "css" ||
      (type === "font" && !!path.match(/sourcesanspro-regular-webfont.[0-9a-z]{8}.woff2$/)),
  });
  return response;
}) satisfies Handle;

export const handle = sequence(handleSetupRedisClient, handlePreload);
