// import type { ExtractQueryType } from "$lib/util/types";
import chunk from "lodash/chunk";
// import type { NewsArticlesQuery } from "../$queries.generated";

// type EventCollection = ExtractQueryType<EventsQuery, ["eventEntryCollection"]>;
// type Event = ExtractQueryType<EventCollection, ["items", number]>;

// type EventOptionsKeys = never;
// type EventOptionsNullable = Required<Pick<Event, EventOptionsKeys>>;
// type EventOptions = {
//   [K in keyof EventOptionsNullable]: NonNullable<EventOptionsNullable[K]>;
// };

//const baseTimestamp = Date.now() + 1 * day;
//const getEventDateAndTime = (i: number) => new Date(baseTimestamp + i * day).toISOString();

const getArticleID = (i: number) => `${1000 + i}`;

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const getArticle = (i: number) => ({
  sys: {
    id: getArticleID(i),
  },
  title: "Test title",
  subhead: "Test subhead",
  slug: "test-slug",
  byline: "Test Author",
  publicationDate: new Date(),
  type: "article",
  body: {
    json: {
      content: [
        {
          nodeType: "paragraph",
          content: [
            {
              nodeType: "text",
              value: lipsum,
            },
          ],
        },
      ],
    },
  },
});

export const newsEntries = new Array(200).fill(undefined).map((_, i) => getArticle(i));
export const pages = chunk(newsEntries, 20).map((items) => ({
  total: newsEntries.length,
  items,
}));
