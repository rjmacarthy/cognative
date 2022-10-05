import {
  mean,
  sqrt,
  stddev,
  cumSum,
  subtract,
  add,
  multiply,
  divide,
  abs
} from '../lib/data-frame/math'

test('base', () => {
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
