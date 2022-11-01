import * as _ from "lodash"
import * as b from "../base"
import * as s from "../series"

export const mean = (x : Matrix) =>
  b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sMean), b.inverseTranspose)(x)

export const sqrt = (x : Matrix) =>
  b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sSqrt), b.inverseTranspose)(x)

export const stddev = (x : Matrix) => b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sStd))(x)

export const cumSum = (x : Matrix) =>
  b.compose(b.inverseTranspose, (x : Matrix) => b.sFn(x, s.sCumSum), b.transpose)(x)

export const add = (x : Matrix) => b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sAdd))(x)

export const subtract = (x : Matrix) =>
  b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sSubtract))(x)

export const divide = (x : Matrix) =>
  b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sDivide))(x)

export const multiply = (x : Matrix) =>
  b.compose(b.transpose, (x : Matrix) => b.sFn(x, s.sMultiply))(x)

export const matMul = (x: Matrix, y: Matrix) =>
  _.map(b.transpose(x), (r: number[], ri: number) =>
    _.map(r, (n: number, i: number) => n * _.get(b.transpose(y), [ri, i]))
  )

export const abs = (x : Matrix) => b.sFn(x, s.sAbs)

export const fill = (i: number, t: number) => _.fill(Array(t), i)

export const zeros = (r: number, c: number) => _.map(_.times(r, () => s.sZeros(c)))

export const random = (r: number, c: number, min?: number, max?: number) =>
  _.map(_.times(r, () => s.sRandom(c, min, max)))

export const pow = (x: Matrix, p: number) => b.sFn(x, (x : number[]) => s.sPow(x, p))

export const dot = (a: number[], b: number[]): number =>
  _.reduce(a, (acc: number, n: number, i: number) => _.add(acc, _.multiply(n, _.get(b, i))), 0)

export const sumSquares = (x: number[], y: number[]) =>
  _.divide(
    _.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)),
    _.size(x)
  )
