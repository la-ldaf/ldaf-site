// Add type definitions for any environment variables *in active use* here.
// These are usually updated by `npm run check` in /.svelte-kit/ambient.d.ts but that file is
//   unavailable in CI and may also contain local dev machine system environment variables that
//   we do not want to check in to git.
declare module "$env/static/private" {
  export const CONTENTFUL_IMAGE_API_ENDPOINT: string;
  export const CONTENTFUL_DELIVERY_API_TOKEN: string;
  export const CONTENTFUL_SPACE_ID: string;
  export const VERCEL: string;
  export const VERCEL_ENV: string;
  export const VERCEL_GIT_REPO_OWNER: string;
  export const VERCEL_GIT_REPO_SLUG: string;
  export const VERCEL_GIT_COMMIT_SHA: string;
  export const VERCEL_GIT_PULL_REQUEST_ID: string;
  export const KV_URL: string;
}

/*
// Uncomment to declare other environment variable strategies.
declare module "$env/static/public" {

}
declare module "$env/dynamic/private" {
  export const env: {

  };
}
declare module "$env/dynamic/public" {
  export const env: {

  };
}
*/
