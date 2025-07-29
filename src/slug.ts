const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=\[{\]}\\|;:'",<.>/?]+/g

/**
 * 把任意字符串转成 URL 友好的 kebab-case slug。
 *
 * @param str - 任意输入字符串；不传或传空串时返回空串
 * @returns 处理后的 slug（小写、去掉重音、替换特殊字符为 `-`、无前后连字符）
 *
 * @example
 * ```ts
 * slugify('Hello World!')          // 'hello-world'
 * slugify('  你好,  世界 ')        // 'ni-hao-shi-jie'
 * slugify('')                      // ''
 * ```
 *
 * @remarks
 * - 使用 `String.normalize('NFKD')` 去除重音符号<br>
 * - 连续多个 `-` 会被压缩为单个 `-`<br>
 * - 不会保留前导或尾部的 `-`
 */
export default function slugify(str = ''): string {
  return str
    .normalize('NFKD')
    .toLowerCase()
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
}
