# Louisiana Department of Agriculture and Forestry (LDAF) Website

## About

In 2023, LDAF's website ([`ldaf.la.gov`](https://www.ldaf.la.gov/)) underwent an overhaul consisting of a complete redesign, a reorganization of content, and a move to a decoupled architecture with a headless content management system (CMS). This is the open-source project repository for the new site, and it contains all of the application code used to build, test, deploy, and run the site.

See also the [_About this website_](https://www.ldaf.la.gov/about/website) page on the site for more information.

### Tech stack

#### Framework

- [SvelteKit](https://kit.svelte.dev/) as the web development framework.
- [United States Web Design System (USWDS)](https://designsystem.digital.gov/) as the design system.

For more information on why we chose SvelteKit and the USWDS, see our [decision docs](./docs/decisions).

#### Third-party services

- [Contentful](https://www.contentful.com/) as the headless CMS.
- [Vercel](https://vercel.com/) for hosting / infrastructure.
- [Algolia](https://www.algolia.com/) for indexing content and for powering in-site search.

#### Additional tooling

- [TypeScript](https://www.typescriptlang.org/) for type definitions.
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) for generating type definitions based on content models in Contentful.
- [Storybook](https://storybook.js.org/) for creating our component library.
- [ESLint](https://eslint.org/) for static code analysis.
- [Prettier](https://prettier.io/) for code formatting.
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) as testing and assertion frameworks for unit tests.
- [Playwright](https://playwright.dev/) for end-to-end tests.

## Contributing

This project doesn't have a `CONTRIBUTING.md`, but it does have an [engineering process doc](./docs/engineering-process.md) which provides some information on how to file issues and submit pull requests.

## Getting started

### System dependencies

#### Node.js

To easily stay in sync with the project's version of Node.js, we recommend installing `nvm`, the [Node Version Manager](https://github.com/nvm-sh/nvm). Once installed, you can simply run `nvm install` in the project root to install the version of Node specified in `.nvmrc`.

#### Redis

In deployed environments we use [Vercel KV](https://vercel.com/docs/storage/vercel-kv) as a simple database, primarily for caching. To mock this setup locally, all you should need is a default installation of Redis. The Redis documentation site provides detailed instructions for [installing it on your operating system](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/).

### Vercel

While the site can be run locally as-is, it will only display test content by default. If you are a member of the LDAF team on Vercel, however, you can run a full version of the site on your machine.

- First, set up the Vercel CLI and follow the interactive instructions to authenticate with your account:
  ```
  npm i -g vercel
  vercel login
  ```
- Then link your local project to the Vercel project with the following command:
  ```
  vercel link --yes --scope ldaf --project ldaf
  ```
- You can then retrieve environment variables from Vercel and create your `.env` file with:
  ```
  vercel env pull .env --environment development
  ```
  - If you need to run a production-like environment, you can overwrite your `.env` file by pulling from the `production` environment:
    ```
    vercel env pull .env --environment production
    ```
  - **Note:** The application does not play well with multiple environment files, so it's recommended that you only set up the one `.env` file. While you could set up multiple files (e.g. `.env.development` and `.env.production`), certain application features will misbehave or will otherwise not function as expected.

### Running locally

Regardless of whether you created your `.env` file via Vercel, the steps to run the site are as follows:

- Install all relevant dependencies:
  ```
  npm install
  ```
- Run the site locally at [`localhost:5173`](http://localhost:5173):
  ```
  npm run dev
  ```
  Note that you can also use the `vercel dev` command to run the site, but this can behave oddly if you have multiple environment files. There should be no difference between running `npm run dev` and `vercel dev` if you only have one environment file, but we still recommend using `npm run dev`.

## Development

### Perform a full build

To build the site as if you were preparing to deploy it and to preview it locally at [`localhost:4173`](http://localhost:4173):

```
npm run build
npm run preview
```

### GraphQL Code Generator

This project uses [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/docs/getting-started) to generate GraphQL schemas and TypeScript definitions for queries.

#### Generate GraphQL schema from Contentful

```
npm run gen-schema
```

The `gen-schema` script is expected to be run manually when there are updates to content models in Contentful (or when you're working with a different Contentful environment). The outputs of this script are checked into `git` (assuming it's pulled from the Contentful `master` environment) so that the definitions are available to folks without Contentful access.

#### Generate TypeScript definitions for GraphQL queries

```
npm run gen-operations
```

The `gen-operations` script is run automatically as part of multiple [pre scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts#pre--post-scripts); it uses the schema and type definitions created by `gen-schema` to output a file like `$queries.generated.d.ts` next to any file under `src/` with a GraphQL query. These generated files are not checked into `git` since they can be generated without Contentful access.

### Storybook

To run the component library in Storybook:

```
npm run storybook
```

### Testing

#### Unit tests

```
npm run test:unit
```

To run tests and view a coverage report:

```
npm run test:unit:coverage
```

#### End-to-end tests

```
npm run test:e2e
```

You can also open up a UI with Playwright for debugging:

```
npm run test:e2e:ui
```

### Check TypeScript, ESLint, and Prettier

```
npm run check
```

If you'd like this to run on every change while developing, you can run:

```
npm run check:watch
```

## Miscellaneous tips and tricks

### Creating and working with a new Contentful environment

When making changes to content models in Contentful, it's best to create a new environment to work with to isolate changes from the `master` environment, which powers production (and unfortunately cannot be renamed to `main`).

To create a new environment in Contentful:

- Log in and select "Environments" in the "Settings" menu.
- Click "Add environment" and provide an ID and a source environment (typically you will want to use `master`) in the modal.
- Once the environment has been created, select "API keys" in the "Settings" menu.
- Select the "SvelteKit Site Token" and in the settings under "Environments" check the box for the newly created environment so that you can pull from this environment to run the site locally. You may also do this for the "GraphQL Playground Token" if you plan on using the [GraphQL Playground](https://www.contentful.com/marketplace/graphql-playground/) app within Contentful to test your queries.

Once the new environment has been created and the API key has the proper permissions, manually update your `.env` file and set `CONTENTFUL_DEFAULT_ENVIRONMENT` to the new Contentful environment. On changes to the content model you will need to run `npm run gen-schema` to pull down the changes to the schema.

When work has been completed with the new environment, you will need to either use the [Merge](https://www.contentful.com/marketplace/merge/) app within Contentful to merge the model changes into `master` or make the changes to `master` manually and then delete the new environment.
