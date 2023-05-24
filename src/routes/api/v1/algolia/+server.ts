import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

export const GET = (async ({ locals: { contentfulClient, logger } }) => {
  const { pageMetadataMap } = await loadPageMetadataMap({
    includeBreadcrumbs: false,
    contentfulClient,
    logger,
  });
  // exclude the home page and pages where we can't determine the URL
  return json(Array.from(pageMetadataMap.values()).filter((page) => page.url && !page.isRoot));
}) satisfies RequestHandler;
