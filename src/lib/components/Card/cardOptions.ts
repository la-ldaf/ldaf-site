export const variants = ["primary", "flag"] as const;

export type Variant = (typeof variants)[number];
