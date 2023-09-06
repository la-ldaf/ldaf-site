import { loadNewsPage } from "../../shared.server";
import type { PageServerLoad } from "./$types";

// [page] is passed to `loadNewsPage` as `params.page`
export const load = loadNewsPage satisfies PageServerLoad;
