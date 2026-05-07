import { expect, test } from 'vitest'
import { slug } from '../src/index'

test('slug', () => {
  expect(slug('Hello World!')).toBe('hello-world')
  expect(slug('  Café  déjà vu  ')).toBe('cafe-deja-vu')
  expect(slug('')).toBe('')
})
