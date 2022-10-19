import _ from "lodash"
import { shape } from "../base"
import { dot, sumSquares } from "../data-frame"
import { sZeros } from "../series"

export const multiVariateLinearRegression = (x, iterations) => {
  const { features, labels } = x
  const s = shape(features)
  const n = _.last(s)
  let weights = sZeros(n)
  let bias = 0

  const costs = _.map(_.times(iterations), () => {
    const predictions = _.map(features, (f) => dot(weights, f) + bias)
    const cost = sumSquares(predictions, labels)
    const gradients = getGradients(features, labels, predictions)
    weights = gradients.weights
    bias = gradients.bias
    return cost
  })

  return {
    weights,
    bias,
    costs
  }
}

const getGradients = (features, labels, predictions) => {
  const [m, n] = shape(features)
  let weights = sZeros(n)
  let bias = 0

  _.forEach(_.times(m), (i) => {
    const error = _.get(predictions, i) - _.get(labels, i)

    _.forEach(_.times(n), (j) => {
      weights[j] += error * features[i][j]
    })

    bias += error
  })

  return {
    weights: weights.map((w) => w / m),
    bias: bias / m
  }
}
