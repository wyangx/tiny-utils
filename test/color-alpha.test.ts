import { expect, test } from 'vitest'
import { colorAlpha } from '../src/index'

test('basic', () => {
  expect(colorAlpha('#ff6600', 0.5)).toBe('rgba(255, 102, 0, 0.5)')
  expect(colorAlpha('fff', 0)).toBe('rgba(255, 255, 255, 0)')
  expect(colorAlpha('#0f0', 1)).toBe('rgba(0, 255, 0, 1)')
})

test('throws on invalid hex', () => {
  expect(() => colorAlpha('zzzzzz', 0.5)).toThrow(TypeError)
})

test('throws on invalid alpha', () => {
  expect(() => colorAlpha('#ff6600', -1)).toThrow(RangeError)
  expect(() => colorAlpha('#ff6600', 2)).toThrow(RangeError)
  expect(() => colorAlpha('#ff6600', Number.NaN)).toThrow(RangeError)
})
