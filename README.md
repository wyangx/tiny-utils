# @wyangx/tiny-utils

> 极轻量、零依赖、ESM-only 的常用工具集合。

[![npm](https://img.shields.io/npm/v/@wy/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://npmjs.com/@wyangx/tiny-utils)
[![size](https://img.shields.io/bundlephobia/minzip/@wyangx/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://bundlephobia.com/package/@wyangx/tiny-utils)
[![CI](https://img.shields.io/github/actions/workflow/status/yourname/tiny-utils/release.yml?branch=main&label=ci&style=flat&colorA=000&colorB=00c853)](https://github.com/yourname/tiny-utils/actions)

## 安装

```bash
npm i @wyangx/tiny-utils
# 或使用 pnpm / yarn
```

## 使用

按需导入，支持 Tree-shaking：

```ts
import { slug } from '@wy/tiny-utils'
console.log(slug('你好 World!')) // ni-hao-world
```

## API

| 函数 | 说明 | 示例 |
|---|---|---|
| `slug` | 将任意字符串转为 URL-safe slug | `slug('Hello World!') → hello-world` |
| `colorAlpha` | 轻量色彩工具（预留） | `lighten('#000', 0.2)` |

## 体积

- 无依赖  
- Gzip < 500 B（仅包含已用函数）

## 开发

```bash
git clone https://github.com/wyangx/tiny-utils.git
cd tiny-utils
pnpm i
pnpm dev      # watch 模式
pnpm test     # vitest
pnpm build    # 生成 dist
```

## 发布

本项目使用 [Changesets](https://github.com/changesets/changesets) 自动管理版本与发布。

```bash
pnpm changeset        # 记录变更
git commit ...
git push              # CI 自动发布
```

## License

MIT © [Wang Yang](https://github.com/wyangx)
