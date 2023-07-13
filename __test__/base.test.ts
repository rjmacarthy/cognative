import * as _ from "lodash"
import { compose, sFn, isSquare, swap, sFill, rotate, rotateR } from "../lib/base"
import { add } from "../lib/matrix"

test("base", () => {
  expect(
    compose(add)([[1, 2, 3], [1, 2, 3]])
  ).toEqual([2, 4, 6])

  expect(sFill(3, 1)).toEqual([1, 1, 1])

  expect(sFn([[1, 2, 3]])((x: number[]) => _.map(x, (n) => n * 2))).toEqual([
    [2, 4, 6]
  ])

  expect(swap([1, 2], 0, 1)).toEqual([2, 1])

  expect(rotate([[1, 2, 3], [1, 2, 3]])).toEqual([
    [1, 1],
    [2, 2],
    [3, 3]
  ])

  expect(rotateR([
    [1, 4],
    [2, 5],
    [3, 6],
  ])).toEqual([
    [1, 2, 3],
    [4, 5, 6]
  ])

  expect(
    isSquare([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 4]
    ])
  ).toEqual(true)
})
