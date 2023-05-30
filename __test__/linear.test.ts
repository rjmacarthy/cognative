import { LinearLayer } from '../lib/core/linear'

describe('linear', () => {

  const ll = new LinearLayer(3, 2)
  console.log(ll.forward([1, 2, 3]))
})
