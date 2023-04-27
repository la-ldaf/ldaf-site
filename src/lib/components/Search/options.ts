export const sizes = ["small", "default", "big"] as const;
export type Size = (typeof sizes)[number];
