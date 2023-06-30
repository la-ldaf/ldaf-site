import getErrorMessage from "$lib/util/getErrorMessage";

// This endpoint has to be available without authentication so that we can get
export const POST = async ({ request, locals: { logger } }) => {
  const contentType = request.headers.get("Content-Type");
  if (!contentType?.startsWith("application/json")) {
    return new Response(
      JSON.stringify({ error: { message: "Content-Type must start with application/json!" } })
    );
  }
  let message: string;
  try {
    ({ message } = (await request.json()) as { message: string });
  } catch (err) {
    logger.logError(err);
    return new Response(
      JSON.stringify({ error: { message: `Could not log message: ${getErrorMessage(err)}` } })
    );
  }
  logger.logMessage(message);
  return new Response(null, { status: 200 });
};
