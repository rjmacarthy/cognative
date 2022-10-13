import {
  mean,
  sqrt,
  stddev,
  cumSum,
  subtract,
  add,
  multiply,
  divide,
  abs,
  zeros,
  random,
  dot,
  fill
} from '../lib/data-frame'

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

test('zeros', () => {
  expect(zeros(1, 2)).toEqual([[0, 0]])
  expect(zeros(2, 3)).toEqual([
    [0, 0, 0],
    [0, 0, 0]
  ])
})

test('random', () => {
  expect(random(1, 2)[0].length).toEqual(2)
  expect(random(2, 3)[0].length).toEqual(3)
  expect(random(2, 3).length).toEqual(2)
})

test('dot', () => {
  expect(
    dot(
      [[0.5488135039273248], [0.7151893663724195]],
      [[0.10549716166494752], [0.10549716166494752]]
    )
  ).toEqual([[0.05789826694772729], [0.07545044820524252]])

  expect(dot([3, 4, 5], [7, 8, 9])).toEqual(98)

  expect(dot(2, 3)).toEqual(6)

  expect(
    dot([[0.5488135039273248], [0.7151893663724195]], 0.10549716166494752)
  ).toEqual([[0.05789826694772729], [0.07545044820524252]])

  expect(
    dot([[0.5488135039273248], [0.7151893663724195]], [[0.10549716166494752]])
  ).toEqual([[0.05789826694772729], [0.07545044820524252]])
})

test('fill', () => {
  expect(fill(1, 3)).toEqual([1, 1, 1])
})
