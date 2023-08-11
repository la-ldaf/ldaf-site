import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";

// https://kit.svelte.dev/docs/seo#manual-setup-sitemaps
export async function GET() {
  const { pathsToIDs } = await loadPageMetadataMap({ includeBreadcrumbs: false });
  const urls = [...pathsToIDs]
    .map(
      ([path, _]) => `<url>
        <loc>https://ldaf.la.gov${path}</loc>
        <changefreq>daily</changefreq>
      </url>`
    )
    .sort()
    .join("");
  // TODO: Include tags other than just <loc> within <url>, like:
  //       * <lastmod> for date of last Contentful update
  //       * <changefreq> for likeliness of page to change since last crawl;
  //         we should probably default to 'weekly' but set some pages like
  //         past events to 'never'
  //       * <priority> for highlighting important pages; will require
  //         updates to the content model
  // TODO: We can add support for special tags so that Google picks up news
  //       articles and press releases. See:
  //       https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
