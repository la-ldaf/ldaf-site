import path from "path";
import { fork } from "child_process";

export default async (relativeScriptPath: string) => {
  await new Promise<void>((resolve, reject) => {
    const childProcess = fork(path.join(path.resolve("."), relativeScriptPath));
    const handleCode = (code: number | null) => {
      if (!code) return resolve();
      if (code === 0) return resolve();
      return reject({ code });
    };
    childProcess.on("close", handleCode);
    childProcess.on("error", (err) => reject(err));
    childProcess.on("exit", handleCode);
  });
};
