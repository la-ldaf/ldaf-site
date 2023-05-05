import path from "path";
import { fork } from "child_process";

const runScript = async (relativeScriptPath) => {
  await new Promise((resolve, reject) => {
    const childProcess = fork(path.join(path.resolve("."), relativeScriptPath));
    childProcess.on("close", resolve);
    childProcess.on("error", (err) => reject(err));
  });
};

await runScript(
  "src/lib/components/ContentfulRichText/__tests__/documents/.generate-documents-from-markdown.js"
);
