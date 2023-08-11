declare module "*&imagetools" {
  const src: string;
  export default src;
}

declare module "*&imagetoolsMultiple" {
  const urls: string[];
  export default urls;
}

declare module "*&imagetoolsMetadata" {
  export const src: string;
  export const width: number;
  export const height: number;
  export const format: string;
}
