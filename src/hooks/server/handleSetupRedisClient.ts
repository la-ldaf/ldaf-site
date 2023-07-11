import type { Handle } from "@sveltejs/kit";
import type { RedisClientType } from "redis";
import * as env from "$env/static/private";
import { createConnectedRedisClient } from "$lib/services/redis";

export const getHandleSetupRedisClient = ({ env = {} }: { env?: Record<string, string> } = {}) =>
  (async ({ event, resolve }) => {
    // we intentionally don't await this promise here, so that other things can happen while redis is
    // initializing. Anything that needs redis can await the promise by calling
    // event.locals.getConnectedRedisClient() and awaiting the result. If nothing awaits the promise
    // then we never wait on redis connecting first.
    let redisClientPromise: Promise<RedisClientType>;
    setRedisClientPromise: if (!env.KV_URL) {
      redisClientPromise = Promise.reject(
        new Error("could not get redis client; no KV_URL was specified")
      );
    } else {
      let parsed: URL;
      try {
        parsed = new URL(env.KV_URL);
      } catch (err) {
        redisClientPromise = Promise.reject(err);
        break setRedisClientPromise;
      }
      redisClientPromise = createConnectedRedisClient({
        url: env.KV_URL,
        useTLS: !(parsed.hostname === "localhost" || parsed.hostname === "kv"),
      });
    }

    // So we don't get unhandled promise rejection warnings if nothing awaits the promise
    redisClientPromise.catch((err) => event.locals.logger.logError(err));

    event.locals.getConnectedRedisClient = async () => {
      const client = await redisClientPromise;
      event.locals.logger.setContext("redisConnected", true);
      return client;
    };

    return resolve(event);
  }) satisfies Handle;

export default getHandleSetupRedisClient({ env });
