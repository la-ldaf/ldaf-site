import { join } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import svg from "@poppanator/sveltekit-svg";
import type { PluginOption } from "vite";
import { purgeCss } from "vite-plugin-tailwind-purgecss";
import ldafIcon from "./vite-plugin-ldaf-icon";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vitest/config";
import blurhash from "./vite-plugin-blurhash";
import bundlestring from "./vite-plugin-import-as-bundle-string";

const plugins: PluginOption[] = [
  sveltekit(),
  // https://partytown.builder.io/sveltekit
  partytownVite({
    dest: join(process.cwd(), ".svelte-kit/output/client/~partytown"),
  }),
  svg(),
  blurhash(),
  imagetools(),
  bundlestring(),
  ldafIcon(),
];

if (process.env.NODE_ENV === "production") {
  // Our PurgeCSS plugin was previously a Svelte-specific plugin that was migrated.
  // Original plugin: https://github.com/AdrianGonz97/vite-plugin-svelte-purgecss
  // To restore similar functionality, we now run it with the `legacy` option enabled.
  // https://github.com/AdrianGonz97/vite-plugin-tailwind-purgecss/blob/master/legacy-mode.md
  plugins.push(purgeCss({ legacy: true }));
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
    setupFiles: ["src/lib/__tests__/setup.ts"],
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
