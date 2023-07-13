import { vDouble, vReverse } from '../lib/vector'

test('base', () => {
  expect(vDouble([1, 2])).toEqual([2, 4])

  expect(vReverse([1, 2])).toEqual([2, 1])
})
