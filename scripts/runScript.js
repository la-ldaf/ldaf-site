import path from "path";
import { fork } from "child_process";

export default async (relativeScriptPath) => {
  await new Promise((resolve, reject) => {
    const childProcess = fork(path.join(path.resolve("."), relativeScriptPath));
    childProcess.on("close", resolve);
    childProcess.on("error", (err) => reject(err));
  });
};
