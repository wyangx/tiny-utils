import { expect, test } from 'vitest'
import { shuffle } from '../src/index.js'

test('shuffle keeps same length', () => {
  const original = [1, 2, 3, 4, 5]
  const result = shuffle(original)
  expect(result).toHaveLength(original.length)
  expect(result).toEqual(expect.arrayContaining(original))
})

test('empty array', () => {
  expect(shuffle([])).toEqual([])
})
