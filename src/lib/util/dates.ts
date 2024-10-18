import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import zonedTimeToUtc from "date-fns-tz/zonedTimeToUtc";
import { parseISO, startOfDay, endOfDay, formatISO, sub } from "date-fns";

import { months } from "$lib/constants/date";

export const getCurrentDateInTZ = (tz: string): string => {
  const date = new Date();
  const zoned = utcToZonedTime(date, tz);
  return formatISO(zoned, { format: "extended", representation: "date" });
};

export const getDateTwelveMonthsAgoInTZ = (tz: string): string => {
  const date = sub(new Date(), { months: 12 });
  const zoned = utcToZonedTime(date, tz);
  return formatISO(zoned, { format: "extended", representation: "date" });
};

export const getDateSixMonthsAgoInTZ = (tz: string): string => {
  const date = sub(new Date(), { months: 6 });
  const zoned = utcToZonedTime(date, tz);
  return formatISO(zoned, { format: "extended", representation: "date" });
};

export const getStartOfDayForDateInTZ = (dateString: string, tz: string): Date => {
  const date = startOfDay(parseISO(dateString));
  return zonedTimeToUtc(date, tz);
};

export const getEndOfDayForDateInTZ = (dateString: string, tz: string): Date => {
  const date = endOfDay(parseISO(dateString));
  return zonedTimeToUtc(date, tz);
};

// date-only fields in Contentful (fields without timestamps) still include UTC
//  timezone, so we need to use getUTC* methods to generate a date string
export const getDateStringFromUTCDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
};
