import * as _ from "lodash"
import { transpose, inverseTranspose, compose, sFn } from "../base"
import * as s from "../series"

export const mean = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sMean), inverseTranspose)(x)

export const sqrt = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sSqrt), inverseTranspose)(x)

export const stddev = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sStd))(x)

export const cumSum = (x: Matrix) =>
  compose(inverseTranspose, (x: Matrix) => sFn(x, s.sCumSum), transpose)(x)

export const add = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sAdd))(x)

export const subtract = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sSubtract))(x)

export const divide = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sDivide))(x)

export const multiply = (x: Matrix) =>
  compose(transpose, (x: Matrix) => sFn(x, s.sMultiply))(x)

export const matMul = (x: Matrix, y: Matrix) =>
  _.map(transpose(x), (r: number[], ri: number) =>
    _.map(r, (n: number, i: number) => n * _.get(transpose(y), [ri, i]))
  )

export const abs = (x: Matrix) => sFn(x, s.sAbs)

export const fill = (i: number, t: number) => _.fill(Array(t), i)

export const zeros = (r: number, c: number) =>
  _.map(_.times(r, () => s.sZeros(c)))

export const random = (r: number, c: number, min?: number, max?: number) =>
  _.map(_.times(r, () => s.sRandom(c, min, max)))

export const pow = (x: Matrix, p: number) =>
  sFn(x, (x: number[]) => s.sPow(x, p))

export const dot = (a: number[], b: number[]): number =>
  _.reduce(
    a,
    (acc: number, n: number, i: number) =>
      _.add(acc, _.multiply(n, _.get(b, i))),
    0
  )

export const sumSquares = (x: number[], y: number[]) =>
  _.divide(_.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)), _.size(x))
