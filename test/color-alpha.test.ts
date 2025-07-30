import { expect, test } from 'vitest'
import { colorAlpha } from '../src/index'

test('basic', () => {
  expect(colorAlpha('#ff6600', 0.5)).toBe('rgba(255, 102, 0, 0.5)')
  expect(colorAlpha('fff', 0)).toBe('rgba(255, 255, 255, 0)')
})
