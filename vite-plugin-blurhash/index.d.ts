declare module "*?blurhash" {
  const src: string;
  export const width: number;
  export const height: number;
  export const mean: { r: number; b: number; g: number };
  export default src;
}
