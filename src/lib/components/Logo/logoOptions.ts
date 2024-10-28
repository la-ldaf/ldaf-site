export const placements = [
  "mobile-header-main",
  "mobile-header-menu",
  "desktop-header",
  "mobile-footer",
  "desktop-footer",
] as const;

export type Placement = (typeof placements)[number];
