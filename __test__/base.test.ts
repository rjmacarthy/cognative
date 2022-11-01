import * as _ from "lodash"
import { compose, sFn, isSquare, swap, sFill } from "../lib/base"
import { add } from "../lib/data-frame"

test("base", () => {
  expect(
    compose(add)([[1, 2, 3], [1, 2, 3]])
  ).toEqual([2, 4, 6])

  expect(sFill(3, 1)).toEqual([1, 1, 1])

  expect(sFn([[1, 2, 3]], (x: number[]) => _.map(x, (n) => n * 2))).toEqual([
    [2, 4, 6]
  ])

  expect(swap([1, 2], 0, 1)).toEqual([2, 1])

  expect(
    isSquare([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 4]
    ])
  ).toEqual(true)
})
