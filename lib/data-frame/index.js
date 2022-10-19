import _ from "lodash"
import * as b from "../base"
import * as s from "../series"

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

export const matMul = (x, y) =>
  _.map(b.transpose(x), (r, ri) =>
    _.map(r, (n, i) => n * _.get(b.transpose(y), [ri, i]))
  )

export const abs = (x) => b.sFn(x, s.sAbs)

export const fill = (i, t) => _.fill(Array(t), i)

export const zeros = (r, c) => _.map(_.times(r, () => s.sZeros(c)))

export const random = (r, c, min, max) =>
  _.map(_.times(r, () => s.sRandom(c, min, max)))

export const pow = (x, p) => b.sFn(x, (x) => s.sPow(x, p))

export const dot = (a, b) =>
  _.reduce(a, (acc, n, i) => _.add(acc, _.multiply(n, _.get(b, i))), 0)

export const sumSquares = (x, y) =>
  _.divide(
    _.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)),
    _.size(x)
  )
