type Pattern = 'yyyy-MM-dd' | 'yyyy-MM-dd hh:mm' | 'hh:mm:ss' | string

const pad = (n: number) => n.toString().padStart(2, '0')

/**
 * 格式化日期 
 * @param date Date | number | string
 * @description 将日期格式化为指定模式的字符串
 * @param pattern
 * @returns 格式化后的日期字符串
 */
export default function dfmt(date: Date | number | string = new Date(), pattern: Pattern = 'yyyy-MM-dd'): string {
  const d = new Date(date)
  const y = d.getFullYear()
  const M = d.getMonth() + 1
  const D = d.getDate()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()

  return pattern
    .replace('yyyy', y.toString())
    .replace('MM', pad(M))
    .replace('dd', pad(D))
    .replace('hh', pad(h))
    .replace('mm', pad(m))
    .replace('ss', pad(s))
}
