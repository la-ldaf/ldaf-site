# Louisiana Department of Agriculture and Forestry Website

## Getting started

To easily stay in sync with the project version of `npm`, we recommend installing `nvm`, the [Node Version Manager](https://github.com/nvm-sh/nvm). Once installed, you can simply run `nvm install` in the project root to install the version of `npm` specified in `.nvmrc`.

To install all relevant dependencies:

```
npm install
```

To run the site locally and open the app in a new browser tab:

```
npm run dev -- --open
```

To build the site for production and preview it locally:

```
npm run build
npm run preview
```

## Storybook

To run Storybook locally:

```
npm run storybook
```

To deploy Storybook to chromatic (requires `CHROMATIC_PROJECT_TOKEN` be set in `.env`):

```
npm run chromatic
```

## Vercel

If you are a member of the LDAF team on Vercel, first set up the Vercel CLI:

```
npm i -g vercel
vercel login
```

Then link your local project to the Vercel project (choosing the `LDAF` scope) with:

```
vercel link
```

You can then retrieve environment variables from Vercel with:

```
vercel env pull
```

Or run the project locally with:

```
vercel dev
```
