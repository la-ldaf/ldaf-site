import { error } from "@sveltejs/kit";
import { Buffer } from "node:buffer";
import { AUTH_TOKEN } from "$env/static/private";

export const authenticateRequest = (request: Request) => {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) throw error(401, "Auth token required");
  if (!authHeader.startsWith("Basic ")) throw error(401, "Auth token required");
  const token = authHeader.substring(6);

  if (Buffer.from(token, "base64").toString("utf-8") !== `:${AUTH_TOKEN}`)
    throw error(403, "Unauthorized user");
  // Fall through to return Promise<void> in success case
};
