/**
 * @wyangx/ls-mate
 * localStorage 带过期时间 & JSON 自动序列化
 * 80 行以内，零依赖
 */
type Stored<T> = { value: T; expire?: number }

function now() {
  return Date.now()
}

function set<T>(key: string, value: T, ttl?: number): void {
  const payload: Stored<T> = { value }
  if (ttl && ttl > 0) payload.expire = now() + ttl
  localStorage.setItem(key, JSON.stringify(payload))
}

function get<T>(key: string, fallback?: T): T | undefined {
  const raw = localStorage.getItem(key)
  if (raw === null) return fallback
  try {
    const { value, expire }: Stored<T> = JSON.parse(raw)
    if (expire && now() > expire) {
      remove(key)
      return fallback
    }
    return value
  } catch {
    return fallback
  }
}

function remove(key: string): void {
  localStorage.removeItem(key)
}

function clear(): void {
  localStorage.clear()
}

// 命名导出，方便摇树
export { set, get, remove, clear }
