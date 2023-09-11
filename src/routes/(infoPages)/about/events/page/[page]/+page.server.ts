import { loadEventsPage } from "../../shared.server";
import type { PageServerLoad } from "./$types";

// [page] is passed to `loadEventsPage` as `params.page`
export const load = loadEventsPage satisfies PageServerLoad;
