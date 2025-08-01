# @wyangx/tiny-utils

> 极轻量、零依赖、ESM-only 的常用工具集合。

[![npm](https://img.shields.io/npm/v/@wyangx/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://npmjs.com/@wyangx/tiny-utils)
[![size](https://img.shields.io/bundlephobia/minzip/@wyangx/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://bundlephobia.com/package/@wyangx/tiny-utils)
[![npmdownloads](https://img.shields.io/npm/dm/@wyangx/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://www.npmjs.com/package/@wyangx/tiny-utils)
[![license](https://img.shields.io/npm/l/@wyangx/tiny-utils?style=flat&colorA=000&colorB=00c853)](https://github.com/wyangx/tiny-utils/blob/main/LICENSE)

## 安装

```bash
npm i @wyangx/tiny-utils
# 或使用 pnpm / yarn
```

## 使用

按需导入，支持 Tree-shaking：

```ts
// Slug conversion
import { slug } from '@wy/tiny-utils'
console.log(slug('你好 World!')) // ni-hao-world

// Color conversion
import { colorAlpha } from '@wy/tiny-utils'
console.log(colorAlpha('#ff0000', 0.5)) // rgba(255, 0, 0, 0.5)

// Date formatting
import { dfmt } from '@wy/tiny-utils'
console.log(dfmt(new Date(), 'yyyy-MM-dd hh:mm')) // 2023-01-01 12:00

// Placeholder images
import { placePic } from '@wy/tiny-utils'
console.log(placePic({ width: 300, grayscale: true })) // https://picsum.photos/300/480?grayscale

// LocalStorage utilities
import { ls } from '@wy/tiny-utils'
ls.set('key', 'value', 1000) // 1 second expiration
console.log(ls.get('key', 'default')) // value

// Array shuffling
import { shuffle } from '@wy/tiny-utils'
console.log(shuffle([1, 2, 3, 4, 5])) // [3, 1, 5, 2, 4] (random order)
```

## API

| 函数 | 说明 | 示例 |
|---|---|---|
| `slug` | 将任意字符串转为 URL-safe slug | `slug('Hello World!') → hello-world` |
| `colorAlpha` | 将 HEX 颜色转为 RGBA 格式 | `colorAlpha('#ff0000', 0.5) → rgba(255, 0, 0, 0.5)` |
| `dfmt` | 格式化日期为指定模式的字符串 | `dfmt(new Date(), 'yyyy-MM-dd') → 2023-01-01` |
| `placePic` | 生成占位图片 URL | `placePic({ width: 300, grayscale: true }) → https://picsum.photos/300/480?grayscale` |
| `ls.set` | 设置带过期时间的 localStorage 值 | `ls.set('key', 'value', 1000)` |
| `ls.get` | 获取 localStorage 值，支持过期检查 | `ls.get('key', 'default')` |
| `ls.remove` | 删除 localStorage 值 | `ls.remove('key')` |
| `ls.clear` | 清空所有 localStorage 值 | `ls.clear()` |
| `shuffle` | 使用 Fisher–Yates 算法打乱数组顺序 | `shuffle([1, 2, 3, 4, 5]) → [3, 1, 5, 2, 4]` |

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
