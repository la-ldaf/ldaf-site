import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

export const GET = (async () => {
  const { pageMetadataMap } = await loadPageMetadataMap({ includeBreadcrumbs: false });
  return json(Array.from(pageMetadataMap.values()));
}) satisfies RequestHandler;
