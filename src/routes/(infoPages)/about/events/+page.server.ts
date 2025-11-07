import { loadEventsPage } from "./shared.server";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params, ...arg }) =>
  await loadEventsPage({ ...arg, params: { ...params, page: "1" } })) satisfies PageServerLoad;
