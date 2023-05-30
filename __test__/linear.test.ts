import { Linear } from '../lib/core/linear'

describe('linear', () => {

  const ll = new Linear(3, 2)
  console.log(ll.forward([1, 2, 3]))
})
