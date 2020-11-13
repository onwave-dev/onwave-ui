import autoprefixer from "autoprefixer";
import path from "path";
import cssimport from "postcss-import";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import url from "rollup-plugin-url";
import visualizer from "rollup-plugin-visualizer";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx", ".css"];
const dependencies = ["rc-progress", "react-toastify"];

const getPlugins = (format) => [
  external(),
  postcss({
    sourceMap: true,
    extract: true,
    minimize: true,
    modules: true,
    plugins: [cssimport(), autoprefixer()],
  }),
  url(),
  typescript({
    typescript: require("typescript"),
    ...(format === "cjs" && {
      tsconfigOverride: { compilerOptions: { declaration: false } },
    }),
  }),
  resolve({
    extensions,
  }),
  commonjs({ extensions: [".js", ".ts", ".css"] }),
  babel({
    exclude: "node_modules/**",
    extensions,
  }),
  process.env.RUNNING_ENV === "analyze" && format === "cjs"
    ? visualizer({
        sourcemap: false,
        bundlesRelative: false,
        open: true,
        gzipSize: true,
        template: "treemap", // sunburst, treemap, circlepacking, network
      })
    : undefined,
];

export default [
  {
    input: "src/index.ts",
    output: {
      dir: path.dirname(pkg.module),
      format: "esm",
      sourcemap: true,
    },
    external: dependencies,
    plugins: getPlugins("esm"),
    preserveModules: true,
  },
  {
    input: "src/index.ts",
    output: {
      dir: path.dirname(pkg.main),
      format: "cjs",
      sourcemap: true,
    },
    external: dependencies,
    plugins: getPlugins("cjs"),
  },
];
