import {
  mean,
  sqrt,
  stddev,
  cumSum,
  subtract,
  add,
  multiply,
  matMul,
  divide,
  abs,
  zeros,
  random,
  dot,
  fill,
  sumSquares
} from "../lib/data-frame"

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

  expect(
    cumSum([
      [11, 20, 3],
      [1, 15, 6],
      [2, 30, 40],
      [2, 89, 78]
    ])
  ).toEqual([
    [11, 20, 3],
    [12, 35, 9],
    [14, 65, 49],
    [16, 154, 127]
  ])

  expect(
    add([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([2, 4, 6])

  expect(
    divide([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([1, 1, 1])

  expect(
    multiply([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([1, 4, 9])

  expect(
    abs([
      [-1, -2, -3],
      [-1, -2, -3]
    ])
  ).toEqual([
    [1, 2, 3],
    [1, 2, 3]
  ])

  expect(
    subtract([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([0, 0, 0])
})

test("zeros", () => {
  expect(zeros(1, 2)).toEqual([[0, 0]])
  expect(zeros(2, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0]
  ])
})

test("random", () => {
  expect(random(1, 2)[0].length).toEqual(2)
  expect(random(2, 3)[0].length).toEqual(3)
  expect(random(2, 3).length).toEqual(2)
})

test("dot", () => {
  expect(dot([1, 2, 3], [1, 2, 3])).toEqual(14)
})

test("fill", () => {
  expect(fill(1, 3)).toEqual([1, 1, 1])
})

test("matMul", () => {
  expect(
    matMul(
      [
        [1, 2, 3],
        [1, 2, 3]
      ],
      [
        [1, 2, 3],
        [1, 2, 3]
      ]
    )
  ).toEqual([
    [1, 1],
    [4, 4],
    [9, 9]
  ])
})

test("sumSquares", () => {
  expect(sumSquares([1, 2, 3, 4, 5, 6], [0, 0, 0, 0, 0, 0])).toEqual(
    15.166666666666666
  )
})
