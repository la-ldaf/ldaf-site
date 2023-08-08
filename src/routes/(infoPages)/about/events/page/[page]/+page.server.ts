import { loadEventsPage } from "../../shared.server";
import type { PageServerLoad } from "./$types";

export const load = loadEventsPage satisfies PageServerLoad;
