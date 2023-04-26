declare module "$icons" {
  export const names: string[];
  export const namesToPaths: Record<string, string>;
}

declare module "$icons/*" {
  export const name: string;
  export const url: string;
}
