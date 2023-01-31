import type { Options } from 'tsup'

const config: Options = {
  entry: ['lib/archetypeapi.js'],
  dts: true,
  sourcemap: true,
  format: ['iife', 'cjs', 'esm'],
}

export default config
