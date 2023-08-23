import { describe, expect, it } from "vitest";
import getTrimmedFirstParagraph from "./getTrimmedFirstParagraph";

const testMaxLength = 50;

const testCases = [
  [
    `this is the first paragraph\nthis is the second paragraph\nthis is the third paragraph`,
    "this is the first paragraph",
  ],
  [
    `this is a very long first paragraph. it is longer than maxLength.`,
    "this is a very long first paragraph. it is longer",
  ],
  [
    `this is a very long first paragraph that has a second paragraph following it\nthis is the second paragraph`,
    "this is a very long first paragraph that has a",
  ],
];

describe("getTrimmedFirstParagraph", () => {
  testCases.forEach(([input, expected], i) => {
    it(`handles test case ${i}`, () => {
      expect(getTrimmedFirstParagraph(input, testMaxLength)).toEqual(expected);
    });
  });
});
