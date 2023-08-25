#!/usr/bin/env ts-node-esm

import { stat, copyFile } from "fs/promises";
import runScript from "./runScript";

const copyExampleEnvFile = async () => {
  if (process.env.VERCEL === "1") {
    return;
  }

  const envExists = await stat("./.env")
    .then(() => true)
    .catch(() => false);

  if (!envExists) {
    await copyFile("./.env.example", "./.env");
  }
};

await Promise.all([
  runScript(
    "src/lib/components/ContentfulRichText/__tests__/documents/generateDocumentsFromMarkdown.ts",
  ),
  copyExampleEnvFile(),
]);
