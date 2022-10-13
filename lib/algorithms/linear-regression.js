import _ from 'lodash'
import { inverseTranspose, shape } from '../base'
import { dot, subtract, zeros } from '../data-frame'
import { sAdd, sPow } from '../series'

class LinearRegression {
  rate
  iterations
  cost = []
  w
  shape
  m

  constructor (_rate = 0.5, _iterations = 1000) {
    this.rate = _rate
    this.iterations = _iterations
  }

  fit (x, y) {
    this.w = zeros(_.last(shape(x), 1))
    const m = _.first(shape(x))

    for (let index = 0; index < this.iterations; index++) {
      const yPred = dot(x, this.w)
      const residuals = [subtract([y, yPred])]
      const xT = inverseTranspose(x)
      const gradientVector = dot(xT, residuals)
      this.w -= (this.rate / m) * gradientVector
      const cost = sAdd(sPow(_.first(residuals), 2)) / (2 * m)
      this.cost.push(cost)
    }
  }

  predict (x) {
    return dot(x, this.w)
  }
}

export default LinearRegression
