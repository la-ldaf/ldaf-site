import { stat, copyFile, appendFile } from "fs/promises";
import runScript from "./runScript";
import "dotenv/config";

const copyExampleEnvFile = async () => {
  if (process.env.VERCEL === "1") {
    return;
  }

  const envExists = await stat("./.env")
    .then(() => true)
    .catch(() => false);

  if (!envExists) {
    await copyFile("./.env.example", "./.env");
  } else {
    // For some reason the Vercel system environment variables are not included
    //   when running `vercel env pull` pointed at the `development`
    //   environment. We need some of these variables to be included (even if
    //   they are blank) in order to build the application.
    // So in the case that there's already a `.env` file, we check that the
    //   necessary system variables are in place and add them if they're not.
    // For more on system environment variables:
    //   https://vercel.com/docs/projects/environment-variables/system-environment-variables
    const emptyString = '""';
    const defaultSystemVariables = {
      VERCEL: '"0"',
      VERCEL_ANALYTICS_ID: emptyString,
      VERCEL_ENV: '"development"',
      VERCEL_GIT_REPO_OWNER: emptyString,
      VERCEL_GIT_REPO_SLUG: emptyString,
      VERCEL_GIT_COMMIT_SHA: emptyString,
      VERCEL_GIT_PULL_REQUEST_ID: emptyString,
    };
    for (const key in defaultSystemVariables) {
      if (typeof process.env[key] === "undefined") {
        await appendFile("./.env", `${key}=${defaultSystemVariables[key]}\n`);
      }
    }
  }
};

await Promise.all([
  runScript(
    "src/lib/components/ContentfulRichText/__tests__/documents/generateDocumentsFromMarkdown.ts",
  ),
  copyExampleEnvFile(),
]);
