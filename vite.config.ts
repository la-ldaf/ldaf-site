import { sveltekit } from "@sveltejs/kit/vite";
import svg from "@poppanator/sveltekit-svg";
import { purgeCss } from "vite-plugin-svelte-purgecss";
import { defineConfig } from "vitest/config";

const plugins = [sveltekit(), svg()];

if (process.env.NODE_ENV === "production") {
  plugins.push(purgeCss());
}

export default defineConfig({
  plugins,
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true,
    environment: "jsdom",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
});
