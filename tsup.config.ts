import { defineConfig } from 'tsup'
// import { glob } from 'glob'

export default defineConfig({
  // entry: await glob('src/*.ts'), // 使用 glob 匹配 src 目录下的所有 .ts 文件
  entry: ['src/index.ts'], // 入口文件
  format: ['esm'],   // 只出 ESM
  dts: true, // 生成类型定义文件
  clean: true, // 清理输出目录
})
