/**
 * 把 #RRGGBB 转成 rgba(r,g,b,alpha)
 * @param hex  6 位或 3 位 HEX，可带 #
 * @param alpha 0-1 之间
 */
export default function colorAlpha(hex: string, alpha: number): string {
  if (!/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex))
    throw new TypeError('Invalid HEX color')

  // 去掉 #
  hex = hex.replace('#', '')

  // 如果是 3 位，转成 6 位
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('')
  }

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  if (alpha < 0 || alpha > 1)
    throw new RangeError('alpha must be between 0 and 1')

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
