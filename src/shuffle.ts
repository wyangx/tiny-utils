/**
 * Fisher–Yates 洗牌算法
 * @param arr 原始数组（不会被修改）
 * @returns 一个新的乱序数组
 */
export default function shuffle<T>(arr: readonly T[]): T[] {
  // 浅拷贝一份原数组，避免副作用
  const out = arr.slice();
  // 从后向前遍历，依次交换
  for (let i = out.length - 1; i > 0; i--) {
    // 随机选取 [0, i] 中的一个索引
    const j = (Math.random() * (i + 1)) << 0;
    // 交换当前位置和随机位置的元素
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
