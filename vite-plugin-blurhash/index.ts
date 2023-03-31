import sharp from "sharp";
import { encode } from "blurhash";

const encodePathToBlurhash = async (path: string) =>
  new Promise((resolve, reject) =>
    sharp(path)
      .raw()
      .ensureAlpha()
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve({
          blurhash: encode(new Uint8ClampedArray(buffer), width, height, 4, 4),
          width,
          height,
        });
      })
  );

export default () => {
  const imageRegex = /\.(jpg|webp|png)\?blurhash$/;

  return {
    name: "blurhash-loader",
    enforce: "pre",
    load: async (id: string) => {
      if (!id.match(imageRegex)) return;
      const [path] = id.split("?");
      const { blurhash, width, height } = await encodePathToBlurhash(path);
      return `\
export default ${JSON.stringify(blurhash)};
export const width = ${width};
export const height = ${height};
`;
    },
  };
};
