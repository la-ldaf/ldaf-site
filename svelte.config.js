import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    // https://kit.svelte.dev/docs/adapter-vercel
    adapter: adapter(),
  },
  onwarn: (warning, handler) => {
    const { code } = warning;

    if (code === "css-unused-selector") return;

    handler(warning);
  },
};

export default config;
