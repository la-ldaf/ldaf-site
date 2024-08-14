import { loadPageMetadataMap } from "$lib/loadPageMetadataMap";
import { loadNews } from "$lib/loadNews";

// Need to escape special characters to ensure generated XML is valid.
// Stole most of this from https://www.npmjs.com/package/xml-escape
const specialCharactersRegExp = /([&"<>'])/g;
const encodedCharactersMap = {
  ">": "&gt;",
  "<": "&lt;",
  "'": "&apos;",
  '"': "&quot;",
  "&": "&amp;",
};
const escapeXML = (text: string): string => {
  return text.replace(
    specialCharactersRegExp,
    (_, item: keyof typeof encodedCharactersMap) => encodedCharactersMap[item],
  );
};

// https://kit.svelte.dev/docs/seo#manual-setup-sitemaps
export async function GET({ locals: { contentfulClient } }) {
  const { pathsToIDs } = await loadPageMetadataMap({ contentfulClient });
  const newsItems = await loadNews({ contentfulClient });

  const urls = [...pathsToIDs]
    .map(
      ([path, _]) => `
      <url>
        <loc>https://www.ldaf.la.gov${path}</loc>
        <changefreq>daily</changefreq>
      </url>`,
    )
    .sort()
    .join("");

  // Handle news separately, using special tags for Google to pick up. See:
  //   https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
  const news = newsItems
    .map((item) =>
      item && item.slug && item.publicationDate && item.title
        ? `
        <url>
          <loc>https://www.ldaf.la.gov/about/news/article/${item.slug}</loc>
          <changefreq>never</changefreq>
          <news:news>
            <news:publication>
              <news:name>Louisiana Department of Agriculture and Forestry</news:name>
              <news:language>en</news:language>
            </news:publication>
            <news:publication_date>${item.publicationDate.split("T")[0]}</news:publication_date>
            <news:title>${escapeXML(item.title)}</news:title>
          </news:news>
        </url>`
        : "",
    )
    .join("");
  // TODO: Include tags other than just <loc> within <url>, like:
  //       * <lastmod> for date of last Contentful update
  //       * <changefreq> for likeliness of page to change since last crawl;
  //         we should probably default to 'weekly' but set some pages like
  //         past events to 'never'
  //       * <priority> for highlighting important pages; will require
  //         updates to the content model
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9">
      ${urls}
      ${news}
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
}
