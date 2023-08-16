import type {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "@contentful/rich-text-types";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingTypeByLevel<L extends HeadingLevel> = {
  1: Heading1;
  2: Heading2;
  3: Heading3;
  4: Heading4;
  5: Heading5;
  6: Heading6;
}[L];

export const headingTagByLevel = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;
