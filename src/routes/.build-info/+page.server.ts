import {
  VERCEL_ENV,
  VERCEL_GIT_REPO_OWNER,
  VERCEL_GIT_REPO_SLUG,
  VERCEL_GIT_COMMIT_SHA,
} from "$env/static/private";

export const load = () => ({
  VERCEL_ENV,
  VERCEL_GIT_REPO_OWNER,
  VERCEL_GIT_REPO_SLUG,
  VERCEL_GIT_COMMIT_SHA,
});
