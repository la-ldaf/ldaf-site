import type { Plugin } from "vite";
import sharp from "sharp";
import { encode } from "blurhash";

type Color = {
  r: number;
  g: number;
  b: number;
};

type BlurHashAndInfo = {
  width: number;
  height: number;
  blurhash: string;
  dominant: Color;
  mean: Color;
};

const encodePathToBlurHashAndInfo = async (path: string): Promise<BlurHashAndInfo> => {
  const image = sharp(path).raw().ensureAlpha();
  const [
    {
      dominant,
      channels: [r, g, b],
    },
    {
      data: buffer,
      info: { width, height },
    },
  ] = await Promise.all([image.stats(), image.toBuffer({ resolveWithObject: true })]);
  const blurhash = encode(new Uint8ClampedArray(buffer), width, height, 4, 4);
  return {
    width,
    height,
    blurhash,
    dominant,
    mean: { r: r.mean, g: g.mean, b: b.mean },
  };
};

export default () => {
  const imageRegex = /\.(jpg|webp|png)\?blurhash$/;

  return {
    name: "blurhash-loader",
    enforce: "pre",
    load: async (id: string) => {
      if (!id.match(imageRegex)) return;
      const [path] = id.split("?", 2);
      const { width, height, blurhash, dominant, mean } = await encodePathToBlurHashAndInfo(path);
      return `\
export default ${JSON.stringify(blurhash)};
export const width = ${width};
export const height = ${height};
export const dominant = ${JSON.stringify(dominant)}
export const mean = ${JSON.stringify(mean)}
`;
    },
  } satisfies Plugin;
};
