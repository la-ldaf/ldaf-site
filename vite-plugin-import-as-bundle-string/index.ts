import type { Plugin } from "vite";
import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const escapeJSString = (unescaped: string) =>
  unescaped.replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll("\n", "\\n");

export default () => {
  const bundleStringRegex = /\?bundlestring$/;
  const plugins = [
    typescript(
      process.env.NODE_ENV === "production" ? {} : { sourceMap: true, inlineSources: true }
    ),
    nodeResolve(),
    process.env.NODE_ENV === "production" && terser(),
  ];
  return {
    name: "import-as-bundle-string-loader",
    load: async function (id: string) {
      if (!id.match(bundleStringRegex)) return;
      const [path] = id.split("?", 2);
      const bundle = await rollup({
        input: path,
        plugins,
      });
      const { output } = await bundle.generate({
        sourcemap: process.env.NODE_ENV === "production" ? "hidden" : "inline",
        format: "iife",
      });
      if (output.length < 0) throw new Error(`rollup could not generate a code file for ${path}`);
      if (output.length > 1) {
        throw new Error(`rollup generated more than one code file for ${path}`);
      }
      const [{ code }] = output;
      return `export default "${escapeJSString(code).trim()}";`;
    },
  } satisfies Plugin;
};
