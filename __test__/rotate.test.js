import { rot, rotC } from '../lib/rotate'

test('rotate', () => {
  expect(
    rot([
      [1, 2, 3],
      [1, 2, 3]
    ])
  ).toEqual([
    [1, 1],
    [2, 2],
    [3, 3]
  ])

  expect(
    rotC([
      [1, 1],
      [2, 2],
      [3, 3]
    ])
  ).toEqual([
    [1, 2, 3],
    [1, 2, 3]
  ])
})
