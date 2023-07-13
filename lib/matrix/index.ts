import * as _ from 'lodash'
import { rotate, rotateR, compose, vFn } from '../base'
import {
  vAbs,
  vAdd,
  vCumSum,
  vDivide,
  vMean,
  vMultiply,
  vPow,
  vRandom,
  vSqrt,
  vStd,
  vSubtract,
  vZeros
} from '../vector'

export const mean = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vMean), rotateR)(x)

export const sqrt = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vSqrt), rotateR)(x)

export const stddev = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vStd))(x)

export const cumSum = (x: Matrix) =>
  compose(rotateR, (x: Matrix) => vFn(x)(vCumSum), rotate)(x)

export const add = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vAdd))(x)

export const subtract = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vSubtract))(x)

export const divide = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vDivide))(x)

export const multiply = (x: Matrix) =>
  compose(rotate, (x: Matrix) => vFn(x)(vMultiply))(x)

export const matMul = (x: Matrix, y: Matrix) =>
  _.map(rotate(x), (r: number[], ri: number) =>
    _.map(r, (n: number, i: number) => n * _.get(rotate(y), [ri, i]))
  )

export const abs = (x: Matrix) => vFn(x)(vAbs)

export const fill = (i: number, t: number) => _.fill(Array(t), i)

export const zeros = (r: number, c: number) =>
  _.map(_.times(r, () => vZeros(c)))

export const random = (r: number, c: number, min?: number, max?: number) =>
  _.map(_.times(r, () => vRandom(c, min, max)))

export const pow = (x: Matrix, p: number) => vFn(x)((x: number[]) => vPow(x, p))

export const dot = (a: number[], b: number[]): number =>
  _.reduce(
    a,
    (acc: number, n: number, i: number) =>
      _.add(acc, _.multiply(n, _.get(b, i))),
    0
  )

export const sumSquares = (x: number[], y: number[]) =>
  _.divide(_.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)), _.size(x))
