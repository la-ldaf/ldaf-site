declare module "*.(jpg|webp|png)?blurhash" {
  const src: string;
  export const width: number;
  export const height: number;
  export default src;
}
