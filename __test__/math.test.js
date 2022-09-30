import { mean, sqrt, stddev } from "../lib/math"

test("base", () => {
  expect(
    sqrt([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([
    [1, 1.4142135623730951, 1.7320508075688772],
    [1, 1.4142135623730951, 1.7320508075688772]
  ])

  expect(
    mean([
      [3, 2, 1],
      [1, 2, 3]
    ])
  ).toEqual([
    [2, 2, 2],
    [2, 2, 2]
  ])

  expect(
    stddev([
      [3, 2, 1],
      [1, 2, 3]
    ])
  ).toEqual([1, 0, 1])
})
