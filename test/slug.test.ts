import { expect, test } from 'vitest'
import { slug } from '../src/index.js'

test('slug', () => {
  expect(slug('Hello World!')).toBe('hello-world')
})
