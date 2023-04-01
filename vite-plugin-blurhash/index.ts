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

/* const encodePathToBlurHashAndInfo = async (path: string): Promise<BlurHashAndInfo> => {
 *   const image = sharp(path);
 *   const [
 *     { channels },
 *     {
 *       data: buffer,
 *       info: {
 *         size: { width, height },
 *       },
 *     },
 *   ] = await Promise.all([image.stats(), image.toBuffer({ resolveWithObject: true })]);
 *   console.log({ channels });
 *   const blurhash = encode(new Uint8ClampedArray(buffer), width, height, 4, 4);
 *   return {
 *     width,
 *     height,
 *     blurhash,
 *   };
 * };
 *  */
const encodePathToBlurHashAndInfoOld = async (path: string): Promise<BlurHashAndInfo> => {
  const image = sharp(path);
  const statsPromise = image.stats();
  const blurhashPromise = new Promise<{ blurhash: string; width: number; height: number }>(
    (resolve, reject) => {
      image
        .raw()
        .ensureAlpha()
        .toBuffer((err, buffer, { width, height }) => {
          if (err) return reject(err);
          resolve({
            blurhash: encode(new Uint8ClampedArray(buffer), width, height, 4, 4),
            width,
            height,
          });
        });
    }
  );
  const [stats, { blurhash, width, height }] = await Promise.all([statsPromise, blurhashPromise]);
  const {
    dominant,
    channels: [r, g, b],
  } = stats;
  const mean = {
    r: r.mean,
    g: g.mean,
    b: b.mean,
  };
  return { blurhash, width, height, dominant, mean };
};

export default () => {
  const imageRegex = /\.(jpg|webp|png)\?blurhash$/;

  return {
    name: "blurhash-loader",
    enforce: "pre",
    load: async (id: string) => {
      if (!id.match(imageRegex)) return;
      const [path] = id.split("?");
      const { width, height, blurhash, dominant, mean } = await encodePathToBlurHashAndInfoOld(
        path
      );
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
