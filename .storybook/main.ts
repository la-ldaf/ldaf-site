import path from "path";
import type { StorybookConfig } from "@storybook/sveltekit";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-designs", // Figma plugin
    //"storybook-addon-manual-mocks",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          $app: path.resolve(__dirname, "../.storybook/app/"),
        },
      },
    });
  },
};
export default config;
