import { expect, test } from 'vitest'
import { dfmt } from '../src/index'

const d = new Date('2023-10-05T09:07:04')

test('yyyy-MM-dd', () => {
  expect(dfmt(d, 'yyyy-MM-dd')).toBe('2023-10-05')
})

test('yyyy-MM-dd hh:mm', () => {
  expect(dfmt(d, 'yyyy-MM-dd hh:mm')).toBe('2023-10-05 09:07')
})

test('hh:mm:ss', () => {
  expect(dfmt(d, 'hh:mm:ss')).toBe('09:07:04')
})
