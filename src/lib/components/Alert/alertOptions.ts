export const variants = ["info", "warning", "error", "success"] as const;

export type Variant = (typeof variants)[number];
