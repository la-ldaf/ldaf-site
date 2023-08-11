import utcToZonedTime from "date-fns-tz/utcToZonedTime";
import zonedTimeToUtc from "date-fns-tz/zonedTimeToUtc";
import { startOfDay, endOfDay } from "date-fns";

type Dateable = Date | string | number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const calcZonedDate = <F extends (...args: any[]) => Date>(
  date: Dateable,
  tz: string,
  fn: F,
  options?: Parameters<F>[1]
) => {
  const inputZoned = utcToZonedTime(date, tz);
  const fnZoned = options ? fn(inputZoned, options) : fn(inputZoned);
  return zonedTimeToUtc(fnZoned, tz);
};

export const zonedStartOfDay = (date: Dateable, tz: string) => calcZonedDate(date, tz, startOfDay);
export const zonedEndOfDay = (date: Dateable, tz: string) => calcZonedDate(date, tz, endOfDay);
