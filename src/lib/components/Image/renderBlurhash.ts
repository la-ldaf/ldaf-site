// Warning: everything in this file is built into a separate bundle and included at the end of the
// <body> to pre-render blurhashes before Svelte has mounted

import drawBlurhash from "./drawBlurhash";

window.drawBlurhash = drawBlurhash;

const onContentLoaded = () => {
  const canvases: Iterable<HTMLCanvasElement> = document.querySelectorAll(
    "canvas.ldaf-img__blur-bg",
  );
  for (const canvas of canvases) {
    const blurhash = canvas.getAttribute("data-blurhash");
    const { width, height } = canvas;
    if (!(blurhash && width && height)) break;
    window.drawBlurhash(canvas, blurhash);
  }
};

document.addEventListener("DOMContentLoaded", onContentLoaded);
