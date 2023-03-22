export const variants = [
  "primary",
  "secondary",
  "base",
  "accent-cool",
  "accent-warm",
  "outline",
  "outline-inverse",
] as const;

export type Variant = (typeof variants)[number];

export const sizes = ["normal", "big"] as const;

export type Size = (typeof sizes)[number];

export const types = ["button", "submit", "reset"] as const;

export type Type = (typeof types)[number];
