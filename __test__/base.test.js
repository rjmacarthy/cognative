import { compose, rowFnx } from '../lib/base'

test('base', () => {
  expect(
    compose(
      (a) => a + 1,
      (a) => a + 1,
      (a) => a + 1
    )(0)
  ).toEqual(3)

  expect(rowFnx([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6])
})
