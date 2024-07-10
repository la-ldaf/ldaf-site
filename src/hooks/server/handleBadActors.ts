// This is a stop-gap measure to block known bad actors.
// Rough implementation inspired by / stolen from:
//   https://github.com/CaptainCodeman/svelte-kit-bot-block
// Note that this will not stop bad actors from accessing static resources such
//   as `/robots.txt` and `/favicon.ico`.

// Some notable bot user agents from looking at our logs:
// 1. FeedFetcher-Google - This is a tool used to crawl RSS feeds and can
//    apparently be used as a DDOS attack vector. All of the requests from this
//    agent lead to 404s and account for an outsized amount of site traffic (on
//    July 8, 2024, it accounted for 32% of our traffic). Since we don't even
//    serve any RSS feeds, there's no point in serving the site to this user
//    agent.
//    https://developers.google.com/search/docs/crawling-indexing/feedfetcher
// 2. BLP_bbot - This is a Bloomberg bot that _aggressively_ requests the old
//    news page (/category/news) and the new one (/about/news), presumably for
//    financial analysis. It accounted for 9% of all site traffic on July 8,
//    2024. Since this seems to be a more legitimate use-case, we're not
//    blocking it quite yet.

import type { Handle } from "@sveltejs/kit";

// Add more user agent tokens to this regex as necessary (using pipes, `|`).
const BAD_ACTORS = /(feedfetcher-google)/i;

const handleBadActors = (async ({ event, resolve }) => {
  const userAgent = event.request.headers.get("user-agent") || "";
  if (BAD_ACTORS.test(userAgent))
    // Give 'em the ol' rickroll. Willing this into existence:
    //   https://bradgessler.com/articles/419-never-gonna-give-you-up/
    return new Response("https://www.youtube.com/watch?v=dQw4w9WgXcQ", {
      status: 419,
      statusText: "Never Gonna Give You Up",
    });
  return resolve(event);
}) satisfies Handle;

export default handleBadActors;
