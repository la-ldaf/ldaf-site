import { loadEventsPage } from "./shared.server";

export const load = async ({ params, ...arg }) =>
  loadEventsPage({ ...arg, params: { ...params, page: 1 } });
