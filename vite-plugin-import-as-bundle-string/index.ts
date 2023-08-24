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
      process.env.NODE_ENV === "production" ? {} : { sourceMap: true, inlineSources: true },
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
        // Suppress some TS warnings that we know are irrelevant.
        onwarn: (warning, handler) => {
          const { pluginCode } = warning;
          // TS7031 - https://github.com/microsoft/TypeScript/blob/cbf3c63ef3bb85e235092eaf5aa6035dad04b185/src/compiler/diagnosticMessages.json#L6382-L6385
          if (pluginCode === "TS7031" || pluginCode === "TS7006") return;
          handler(warning);
        },
      });
      const { output } = await bundle.generate({
        sourcemap: process.env.NODE_ENV === "production" ? false : "inline",
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
