import { shape } from '../lib/shape'

test('base', () => {
  expect(
    shape([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([2, 3])
})
