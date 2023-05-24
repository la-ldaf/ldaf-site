import type { Handle } from "@sveltejs/kit";
import { createClient } from "$lib/services/server/kv";
import { env } from "$env/dynamic/private";

const { KV_URL } = env;

export const getHandleSetupKVClient = ({ env: { KV_URL } }: { env: { KV_URL: string } }) =>
  (async ({ event, resolve }) => {
    const kvClientPromise = KV_URL
      ? createClient({ url: KV_URL, logger: event.locals.logger })
      : Promise.reject(new Error("could not get KV client; no KV_URL was specified"));
    event.locals.getKVClient = () => kvClientPromise;
    return resolve(event);
  }) satisfies Handle;

export default getHandleSetupKVClient({ env: { KV_URL } });
