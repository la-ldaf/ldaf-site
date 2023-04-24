import { stat, copyFile } from "fs/promises";

if (process.env.VERCEL === "1") {
  process.exit(0);
}

const envExists = await stat("./.env")
  .then(() => true)
  .catch(() => false);

if (!envExists) {
  await copyFile("./.env.example", "./.env");
}
