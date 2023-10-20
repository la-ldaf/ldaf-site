import type { Handle } from "@sveltejs/kit";
import { KV_URL } from "$env/static/private";
import { getClient } from "$lib/services/server/kv";

const handleSetupKVClient = (async ({ event, resolve }) => {
  // we intentionally don't await this promise here, so that other things can happen while redis is
  // initializing. Anything that needs redis can await the promise by calling
  // event.locals.getKVClient and awaiting the result. If nothing awaits the promise
  // then we never wait on redis connecting first.
  const kvClientPromise = KV_URL
    ? getClient({ url: KV_URL })
    : Promise.reject(new Error("could not get KV client; no KV_URL was specified"));
  event.locals.getKVClient = () => kvClientPromise;
  return resolve(event);
}) satisfies Handle;

export default handleSetupKVClient;
