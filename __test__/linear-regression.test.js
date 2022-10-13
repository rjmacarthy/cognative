import LinearRegression from '../lib/algorithms/linear-regression'
import { x, y } from './fixtures/linear-regression.fixtures'

import { random } from '../lib/data-frame'

test('random', () => {
  const lr = new LinearRegression()
  const x = random(100, 1)
  const y = random(100, 1, 1, 4)
  lr.fit(x, y)
})

test('static', () => {
  const lr = new LinearRegression()
  lr.fit(x, y)
  lr.predict(x)
})
