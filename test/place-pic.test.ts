import { expect, test } from 'vitest'
import { placePic } from '../src/index'

test('returns URL', () => {
  expect(placePic()).toMatch(/^https:\/\/picsum\.photos\/640\/480$/)
  expect(placePic({ width: 100, grayscale: true })).toMatch(
    /\/100\/480\?grayscale$/
  )
})
