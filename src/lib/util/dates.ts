import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import zonedTimeToUtc from "date-fns-tz/zonedTimeToUtc";
import { parseISO, startOfDay, endOfDay, formatISO } from "date-fns";

export const getCurrentDateInTZ = (tz: string): string => {
  const date = new Date();
  const zoned = utcToZonedTime(date, tz);
  return formatISO(zoned, { format: "extended", representation: "date" });
};

export const getStartOfDayForDateInTZ = (dateString: string, tz: string): Date => {
  const date = startOfDay(parseISO(dateString));
  return zonedTimeToUtc(date, tz);
}

export const getEndOfDayForDateInTZ = (dateString: string, tz: string): Date => {
  const date = endOfDay(parseISO(dateString));
  return zonedTimeToUtc(date, tz);
}
