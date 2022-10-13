import _ from 'lodash'
import * as b from '../base'
import * as s from '../series'

export const mean = (x) =>
  b.compose(b.transpose, (x) => b.sFn(x, s.sMean), b.inverseTranspose)(x)

export const sqrt = (x) =>
  b.compose(b.transpose, (x) => b.sFn(x, s.sSqrt), b.inverseTranspose)(x)

export const stddev = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sStd))(x)

export const cumSum = (x) =>
  b.compose(b.inverseTranspose, (x) => b.sFn(x, s.sCumSum), b.transpose)(x)

export const add = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sAdd))(x)

export const subtract = (x) =>
  b.compose(b.transpose, (x) => b.sFn(x, s.sSubtract))(x)

export const divide = (x) =>
  b.compose(b.transpose, (x) => b.sFn(x, s.sDivide))(x)

export const multiply = (x) =>
  b.compose(b.transpose, (x) => b.sFn(x, s.sMultiply))(x)

export const abs = (x) => b.sFn(x, s.sAbs)

export const fill = (i, t) => _.fill(Array(t), i)

export const zeros = (r, c) => _.map(_.times(r, () => s.sZeros(c)))

export const random = (r, c, min, max) =>
  _.map(_.times(r, () => s.sRandom(c, min, max)))

export const pow = (x, p) => b.sFn(x, (x) => s.sPow(x, p))

export const dot = (x, y) => {
  if (_.isNumber(x) && _.isNumber(y)) {
    return s.sMultiply([x, y])
  }

  if (_.get(b.shape(x), 1) === 0 && _.get(b.shape(y), 1) === 0) {
    return _.sum(multiply([x, y]))
  }

  if (b.is1d(x) && b.is1d(y)) {
    return _.sum(multiply([x[0], y[0]]))
  }

  if (b.isSameShape(x, y)) {
    return _.map(multiply([x, y]), (xy) => [xy])
  }

  if (_.isNumber(y) && _.get(b.shape(x), 1) === 1) {
    return _.map(
      multiply([x, _.fill(Array(_.get(b.shape(x), 0)), y)]),
      (xy) => [xy]
    )
  }

  if (b.is1d(y) && _.get(b.shape(x), 1) === 1) {
    return _.map(
      multiply([x, _.fill(Array(_.get(b.shape(x), 0)), _.get(y, [0, 0]))]),
      (xy) => [xy]
    )
  }

  return undefined
}
