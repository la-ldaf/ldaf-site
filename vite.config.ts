import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string) =>
          `
            @use "src/variables.scss" as *;
            @use "uswds-core" with (
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
