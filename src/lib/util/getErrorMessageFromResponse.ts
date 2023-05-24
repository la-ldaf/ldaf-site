import type { parse as devalueParse } from "devalue";

const getBodyMessage = (body: unknown): string | false =>
  !!(!!body && typeof body === "object" && "message" in body && typeof body.message === "string") &&
  body.message;

const getErrorsMessage = (body: unknown): string | false =>
  !!(!!body && typeof body === "object" && "errors" in body && Array.isArray(body.errors)) &&
  `\
Errors:
${body.errors.map((err) => `- ${getBodyMessage(err)}`).join("\n")}`;

const getErrorMessage = (body: unknown): string | false =>
  !!(
    !!body &&
    typeof body === "object" &&
    "error" in body &&
    !!body.error &&
    typeof body.error === "object" &&
    "message" in body.error &&
    typeof body.error.message === "string"
  ) && body.error.message;

const getGetDataMessage =
  ({ parse }: { parse: typeof devalueParse }) =>
  (body: unknown): string | false => {
    if (!(body && typeof body === "object" && "data" in body && typeof body.data === "string")) {
      return false;
    }
    try {
      const parsed: unknown = parse(body.data);
      if (
        !(
          !!parsed &&
          typeof parsed === "object" &&
          "message" in parsed &&
          typeof parsed.message === "string"
        )
      ) {
        return false;
      }
      return parsed.message;
    } catch (_) {
      return false;
    }
  };

export default async (response: Response): Promise<string | undefined> => {
  const contentType = response.headers.get("Content-Type");
  if (!contentType) return;
  if (contentType.startsWith("text/plain")) return response.text();
  if (contentType.startsWith("application/json") || contentType.startsWith("text/json")) {
    const body = await response.json();

    const bodyMessage = getBodyMessage(body);
    if (bodyMessage) return bodyMessage;

    const errorMessage = getErrorMessage(body);
    if (errorMessage) return errorMessage;

    // List of errors from Contentful
    const errorsMessage = getErrorsMessage(body);
    if (errorsMessage) return errorsMessage;

    // Error message from SvelteKit
    const { parse } = await import("devalue");
    const dataMessage = getGetDataMessage({ parse })(body);
    if (dataMessage) return dataMessage;
  }
  return undefined;
};
