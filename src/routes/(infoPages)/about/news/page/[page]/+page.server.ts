import { loadNewsPage } from "../../shared.server";
import type { PageServerLoad } from "./$types";

export const load = loadNewsPage satisfies PageServerLoad;
