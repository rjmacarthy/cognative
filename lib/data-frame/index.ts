import * as _ from 'lodash'
import { rotate, rotateR, compose, sFn } from '../base'
import {
  sAbs,
  sAdd,
  sCumSum,
  sDivide,
  sMean,
  sMultiply,
  sPow,
  sRandom,
  sSqrt,
  sStd,
  sSubtract,
  sZeros
} from '../series'

export const mean = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sMean), rotateR)(x)

export const sqrt = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sSqrt), rotateR)(x)

export const stddev = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sStd))(x)

export const cumSum = (x: Matrix) =>
  compose(rotateR, (x: Matrix) => sFn(x)(sCumSum), rotate)(x)

export const add = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sAdd))(x)

export const subtract = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sSubtract))(x)

export const divide = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sDivide))(x)

export const multiply = (x: Matrix) =>
  compose(rotate, (x: Matrix) => sFn(x)(sMultiply))(x)

export const matMul = (x: Matrix, y: Matrix) =>
  _.map(rotate(x), (r: number[], ri: number) =>
    _.map(r, (n: number, i: number) => n * _.get(rotate(y), [ri, i]))
  )

export const abs = (x: Matrix) => sFn(x)(sAbs)

export const fill = (i: number, t: number) => _.fill(Array(t), i)

export const zeros = (r: number, c: number) =>
  _.map(_.times(r, () => sZeros(c)))

export const random = (r: number, c: number, min?: number, max?: number) =>
  _.map(_.times(r, () => sRandom(c, min, max)))

export const pow = (x: Matrix, p: number) => sFn(x)((x: number[]) => sPow(x, p))

export const dot = (a: number[], b: number[]): number =>
  _.reduce(
    a,
    (acc: number, n: number, i: number) =>
      _.add(acc, _.multiply(n, _.get(b, i))),
    0
  )

export const sumSquares = (x: number[], y: number[]) =>
  _.divide(_.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)), _.size(x))
