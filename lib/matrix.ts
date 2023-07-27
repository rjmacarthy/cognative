import * as _ from 'lodash'
import { map, unzip } from 'lodash/fp'
import {
  vAbs,
  vAdd,
  vCumSum,
  vMean,
  vMultiply,
  vPow,
  vRandom,
  vSqrt,
  vStd,
  vSubtract,
  vZeros
} from './vector'

// movement
export const rotate = (x: Matrix): Matrix => unzip(map((row: Vector) => row)(x))

export const rotateR = (matrix: Matrix): Matrix => unzip(matrix)

// unary
export const sqrt = (x: Matrix): Matrix => map((v: Vector) => vSqrt(v))(x)

export const mean = (x: Matrix): Matrix => map((v: Vector) => vMean(v))(x)

export const cumSum = (x: Matrix): Matrix =>
  rotate(map((v: Vector) => vCumSum(v))(rotateR(x)))

export const abs = (x: Matrix): Matrix => map((v: Vector) => vAbs(v))(x)

// reduction
export const stddev = (x: Matrix): Vector =>
  map((v: Vector) => vStd(v))(rotate(x))

export const sumSquares = (x: number[], y: number[]) =>
  _.divide(_.sum(_.map(x, (n, i) => (n - _.get(y, i)) ** 2)), _.size(x))

// binary
export const add = (x: Matrix[]): Matrix =>
  map((m: Matrix) => map((v: Vector) => vAdd(v))(rotate(m)))(x)

export const subtract = (x: Matrix[]) =>
  map((m: Matrix) => map((v: Vector) => vSubtract(v))(rotate(m)))(x)

export const divide = (x: Matrix, d: Vector) =>
  _.map(x, (v: Vector) => {
    return _.map(v, (n: number, i) => n / d[i])
  })

export const multiply = (x: Matrix[]) =>
  map((m: Matrix) => map((v: Vector) => vMultiply(v))(rotate(m)))(x)

export const pow = (x: Matrix, p: number) => map((v: Vector) => vPow(v, p))(x)

// utils
export const dot = (a: Vector, b: Vector): number =>
  _.reduce(
    a,
    (acc: number, n: number, i: number) =>
      _.add(acc, _.multiply(n, _.get(b, i))),
    0
  )

export const fill = (i: number, t: number) => _.fill(Array(t), i)

export const zeros = (r: number, c: number) =>
  _.map(_.times(r, () => vZeros(c)))

export const shape = _.memoize((x: Matrix) => [_.size(x), _.size(_.first(x))])

export const isSquare = _.memoize(
  (x) => _.get(shape(x), 0) === _.get(shape(x), 1)
)

export const random = (r: number, c: number, min?: number, max?: number) =>
  _.map(_.times(r, () => vRandom(c, min, max)))

export const isSameShape = (x: Matrix, y: Matrix) =>
  _.get(shape(x), 0) === _.get(shape(y), 0) &&
  _.get(shape(x), 1) === _.get(shape(y), 1)

export const determinant = (x: Matrix) => {
  if (!isSquare(x)) {
    return 0
  }

  if (_.first(shape(x)) === 2) {
    return (
      _.get(_.first(x), 0, 0) * _.get(_.last(x), 1, 0) -
      _.get(_.first(x), 1, 0) * _.get(_.last(x), 0, 0)
    )
  }
}
