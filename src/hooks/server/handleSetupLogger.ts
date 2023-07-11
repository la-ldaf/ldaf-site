import type { Handle } from "@sveltejs/kit";
import { newLogger } from "$lib/logger/private.server";

const handleSetupLogger = (async ({ event, resolve }) => {
  event.locals.logger = newLogger({ context: { PUBLIC: { url: event?.url?.toString() } } });
  return resolve(event);
}) satisfies Handle;

export default handleSetupLogger;
