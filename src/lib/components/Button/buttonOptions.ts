export const variants = [
  "primary",
  "base",
  "inverse",
  "text-only",
  "outline",
  "outline-inverse",
  "big",
  "big-inverse",
] as const;

export type Variant = (typeof variants)[number];

export const types = ["button", "submit", "reset"] as const;

export type Type = (typeof types)[number];
