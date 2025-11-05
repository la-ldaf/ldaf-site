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

// TODO: Investigate how we might re-enable PurgeCSS for production builds.
//       Previously we used `vite-plugin-svelte-purgecss`, but that plugin has
//       been deprecated in favor of `vite-plugin-tailwind-purgecss`, which we
//       could not get working properly (it effectively purged all CSS).
// if (process.env.NODE_ENV === "production") {
//   plugins.push(purgeCss());
// }

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
