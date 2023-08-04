import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

export const GET = (async () => {
  const includeBreadcrumbs = false;
  const { pageMetadataMap /*, pathsToIDs */ } = await loadPageMetadataMap(includeBreadcrumbs);

  // return json(Object.fromEntries(pageMetadataMap));
  return json(Array.from(pageMetadataMap.values()));
}) satisfies RequestHandler;
