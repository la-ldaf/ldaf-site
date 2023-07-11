import type { Handle } from "@sveltejs/kit";

const handleCSP = (async ({ event, resolve }) => {
  event.setHeaders({
    "Content-Security-Policy": "frame-ancestors 'self' https://app.contentful.com",
  });
  return resolve(event);
}) satisfies Handle;

export default handleCSP;
