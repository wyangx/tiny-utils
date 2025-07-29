import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],   // 只出 ESM
  dts: true,
  clean: true,
})
