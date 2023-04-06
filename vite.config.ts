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
        additionalData: (content: string) =>
          `
            @use "src/variables.scss" as *;
            @use "uswds-core" as uswds with (
              $theme-font-path: $theme-font-path,
              $theme-image-path: $theme-image-path,
              $theme-show-notifications: false,
            );
            ${content}
        `,
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
});
