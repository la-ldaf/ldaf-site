import { loadNewsPage } from "./shared.server";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params, ...arg }) =>
  loadNewsPage({ ...arg, params: { ...params, page: "1" } })) satisfies PageServerLoad;
