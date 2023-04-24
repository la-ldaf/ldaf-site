import { sveltekit } from "@sveltejs/kit/vite";
import svg from "@poppanator/sveltekit-svg";
import type { Plugin } from "vite";
import { purgeCss } from "vite-plugin-svelte-purgecss";
import { defineConfig } from "vitest/config";
import blurhash from "./vite-plugin-blurhash";
import bundlestring from "./vite-plugin-import-as-bundle-string";

const plugins: Plugin[] = [...(await sveltekit()), svg(), blurhash(), bundlestring()];

if (process.env.NODE_ENV === "production") {
  plugins.push(purgeCss());
}

export default defineConfig({
  plugins,
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html", "lcov"],
    },
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
