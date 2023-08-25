import { vi, describe, it, expect } from "vitest";

import { getCurrentDateInTZ, getStartOfDayForDateInTZ, getEndOfDayForDateInTZ } from "./dates";

vi.useFakeTimers();

describe("getCurrentDateInTZ", () => {
  type TestCase = [Date, string, string];
  const testCases: TestCase[] = [
    [new Date("2023-08-24T22:43:24.298Z"), "America/Los_Angeles", "2023-08-24"],
    [new Date("2023-08-24T00:00:00.000Z"), "America/Los_Angeles", "2023-08-23"],
    [new Date("2023-08-24T05:00:00.000Z"), "America/Los_Angeles", "2023-08-23"],
    [new Date("2023-08-24T05:00:00.000Z"), "America/Chicago", "2023-08-24"],
  ];
  testCases.forEach(([atDate, tz, expectedDateString]) => {
    it(`returns ${expectedDateString} for the datetime ${atDate.toISOString()} in ${tz}`, () => {
      vi.setSystemTime(atDate);
      expect(getCurrentDateInTZ(tz)).toEqual(expectedDateString);
    });
  });
});

describe("getStartOfDayForDateInTZ", () => {
  type TestCase = [string, string, Date];
  const testCases: TestCase[] = [
    ["2023-08-24", "GMT", new Date("2023-08-24T00:00:00.000Z")],
    ["2023-08-24", "America/Chicago", new Date("2023-08-24T05:00:00.000Z")],
    ["2023-08-24", "America/Los_Angeles", new Date("2023-08-24T07:00:00.000Z")],
  ];
  testCases.forEach(([dateString, tz, expectedDate]) => {
    it(`returns ${expectedDate.toISOString()} for the date ${dateString} in ${tz}`, () => {
      expect(getStartOfDayForDateInTZ(dateString, tz)).toEqual(expectedDate);
    });
  });
});

describe("getEndOfDayForDateInTZ", () => {
  type TestCase = [string, string, Date];
  const testCases: TestCase[] = [
    ["2023-08-24", "GMT", new Date("2023-08-24T23:59:59.999Z")],
    ["2023-08-24", "America/Chicago", new Date("2023-08-25T04:59:59.999Z")],
    ["2023-08-24", "America/Los_Angeles", new Date("2023-08-25T06:59:59.999Z")],
  ];
  testCases.forEach(([dateString, tz, expectedDate]) => {
    it(`returns ${expectedDate.toISOString()} for the date ${dateString} in ${tz}`, () => {
      expect(getEndOfDayForDateInTZ(dateString, tz)).toEqual(expectedDate);
    });
  });
});
