import type { Options } from "tsup";

const config: Options = {
  entry: ["lib/archetypeapi.ts"],
  dts: true,
  format: ["iife", "cjs", "esm"],
  minify: true,
  clean: true,
  platform: "node",
  external: ["util"],
};

export default config;
