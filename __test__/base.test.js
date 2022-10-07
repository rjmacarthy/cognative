import { compose, sFn, isSquare, swap, sFill } from "../lib/base"

test("base", () => {
  expect(
    compose(
      (a) => a + 1,
      (a) => a + 1,
      (a) => a + 1
    )(0)
  ).toEqual(3)

  expect(sFill(3, 1)).toEqual([1, 1, 1])

  expect(sFn([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6])

  expect(swap([1, 2], 0, 1)).toEqual([2, 1])

  expect(
    isSquare([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 4]
    ])
  ).toEqual(true)
})
