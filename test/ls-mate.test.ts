import { describe, expect, it } from 'vitest'
import { ls } from '../src/index'

describe('ls-mate', () => {
  const KEY = '__test__'

  it('set & get', () => {
    ls.set(KEY, { a: 1 })
    expect(ls.get(KEY)).toEqual({ a: 1 })
  })

  it('ttl', async () => {
    ls.set(KEY, 'boom', 10)
    expect(ls.get(KEY)).toBe('boom')
    // 快进 20 ms
    await new Promise(r => setTimeout(r, 20))
    expect(ls.get(KEY)).toBeUndefined()
  })

  it('remove', () => {
    ls.set(KEY, 123)
    ls.remove(KEY)
    expect(ls.get(KEY)).toBeUndefined()
  })
})
