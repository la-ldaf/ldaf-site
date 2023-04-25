import { decodeBlurHash } from "fast-blurhash";

// The canvas should be sized to the expected rendering sized of the blurhash _before_ this function
// is called
export default (canvas: HTMLCanvasElement, blurhash: string) => {
  const { width, height } = canvas;
  const pixels = decodeBlurHash(blurhash, width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
};
