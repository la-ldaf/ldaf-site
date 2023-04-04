// Warning: everything in this file is built into a separate bundle and included at the end of the
// <body> to pre-render blurhashes before Svelte runs

import drawBlurhash from "./drawBlurhash";

const onContentLoaded = () => {
  const canvases: Iterable<HTMLCanvasElement> = document.querySelectorAll(
    "canvas.ldaf-lazy-img__blur-bg"
  );
  for (const canvas of canvases) {
    const blurhash = canvas.getAttribute("data-blurhash");
    const { width, height } = canvas;
    if (!(blurhash && width && height)) break;
    drawBlurhash(canvas, blurhash);
  }
};

document.addEventListener("DOMContentLoaded", onContentLoaded);
