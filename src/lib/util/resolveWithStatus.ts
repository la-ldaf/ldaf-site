import type { MaybePromise, RequestEvent } from "@sveltejs/kit";

// We don't use SvelteKit's built-in error catching to catch preview authentication errors, because
// we want to control that UI and you can't throw errors from hooks or root layouts and still catch
// them within Svelte. This means that our responses will be 200 OK, even if there was a preview
// authentication error that's making the UI show a 401 Unauthorized. This function copies the response
// and sets the status explicitly, fixing this issue. This is probably inefficient, but this is only
// used to serve error pages which are quite small relative to normal pages.

const resolveWithStatus = async <T extends RequestEvent>(
  status: number,
  statusText: string,
  resolve: (event: T) => MaybePromise<Response>,
  event: T
) => {
  const response = await resolve(event);
  const wrappedResponse = new Response(response.body, {
    headers: response.headers,
    status,
    statusText,
  });
  return wrappedResponse;
};

export default resolveWithStatus;
