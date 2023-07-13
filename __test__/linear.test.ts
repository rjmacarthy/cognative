import { Linear } from '../lib/core/linear'

describe('linear', () => {
  test('linear', () => {
    const ll = new Linear(2, 3)
    console.log(ll.forward([1, 2, 3]))
    expect(true).toBe(true)
  })
})
