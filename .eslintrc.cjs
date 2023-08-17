module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:svelte/recommended",
    // From the prettier/eslint-config-prettier README:
    // "Make sure to put it last, so it gets the chance to override other configs."
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    {
      files: ["*.ts", "*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        schema: "./src/lib/services/contentful/schema.graphql",
        operations: "./src/**/*.{ts,svelte,gql,graphql}",
      },
    },
  ],
  // settings: {
  //   "svelte3/typescript": () => require("typescript"),
  // },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },

  rules: {
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "(^_|\\$\\$Props)",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
