import * as _ from 'lodash'
import { dot, shape, sumSquares } from '../matrix'
import { vZeros } from '../vector'

export const multiVariateLinearRegression = (x: { features: Matrix, labels: Vector}, iterations: number) => {
  const { features, labels } = x
  const s: Vector = shape(features)
  const n: number = _.last(s) || 0
  let weights = vZeros(n)
  let bias = 0

  const costs = _.map(_.times(iterations), () => {
    const predictions = _.map(features, (f: Vector) => dot(weights, f) + bias)
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

const getGradients = (features: Matrix, labels: Vector, predictions: number[]) => {
  const [m, n] = shape(features)
  const weights = vZeros(n)
  let bias = 0

  _.forEach(_.times(m), (i: number) => {
    const error = _.get(predictions, i) - _.get(labels, i)

    _.forEach(_.times(n), (j: number) => {
      weights[j] += error * features[i][j]
    })

    bias += error
  })

  return {
    weights: weights.map((w) => w / m),
    bias: bias / m
  }
}
