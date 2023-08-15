import { day } from "$lib/constants/date";
import slugify from "$lib/util/slugify";
import type { ExtractQueryType } from "$lib/util/types";
import chunk from "lodash/chunk";
import type { EventsQuery } from "../$queries.generated";

type EventCollection = ExtractQueryType<EventsQuery, ["eventEntryCollection"]>;
type Event = ExtractQueryType<EventCollection, ["items", number]>;

type EventOptionsKeys = never;
type EventOptionsNullable = Required<Pick<Event, EventOptionsKeys>>;
type EventOptions = {
  [K in keyof EventOptionsNullable]: NonNullable<EventOptionsNullable[K]>;
};

const baseTimestamp = Date.now() + 1 * day;
const getEventDateAndTime = (i: number) => new Date(baseTimestamp + i * day).toISOString();

const getEventID = (i: number) => `${1000 + i}`;

const lipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const getEvent = (_: EventOptions, i: number): Event => ({
  sys: {
    id: getEventID(i),
  },
  shortTitle: `Event at ${getEventDateAndTime(i)}`,
  internalName: slugify(`Event at ${getEventDateAndTime(i)}`),
  eventDescription: lipsum,
  eventDateAndTime: getEventDateAndTime(i),
  eventDocumentsCollection: {
    items: [],
  },
});

export const events: Event[] = new Array(200).fill(undefined).map((_, i) => getEvent({}, i));
export const pages = chunk(events, 20).map((items) => ({ total: events.length, items }));
