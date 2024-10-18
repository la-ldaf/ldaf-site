import { join } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import svg from "@poppanator/sveltekit-svg";
import type { PluginOption } from "vite";
import ldafIcon from "./vite-plugin-ldaf-icon";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vitest/config";
import blurhash from "./vite-plugin-blurhash";
import bundlestring from "./vite-plugin-import-as-bundle-string";
import { purgeCss } from "vite-plugin-tailwind-purgecss";

const plugins: PluginOption[] = [
  sveltekit(),
  // https://github.com/AdrianGonz97/vite-plugin-tailwind-purgecss/blob/master/legacy-mode.md
  purgeCss({ legacy: true }),
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

export default defineConfig({
  plugins,
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true,
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.{js,ts}"],
      exclude: ["src/stories/**/*.{js,ts}"],
      reporter: ["text", "json", "html", "lcov"],
    },
    setupFiles: ["src/lib/__tests__/setup.ts"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
        includePaths: ["./node_modules/@uswds/uswds/packages"],
        quietDeps: true,
      },
    },
  },
});
