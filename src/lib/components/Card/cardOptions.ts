export const variants = ["primary", "secondary"] as const;

export type Variant = (typeof variants)[number];
