import { stat, copyFile } from "fs/promises";
import runScript from "./runScript.js";

await runScript(
  "src/lib/components/ContentfulRichText/__tests__/documents/.generate-documents-from-markdown.js"
);

if (process.env.VERCEL === "1") {
  process.exit(0);
}

const envExists = await stat("./.env")
  .then(() => true)
  .catch(() => false);

if (!envExists) {
  await copyFile("./.env.example", "./.env");
}
