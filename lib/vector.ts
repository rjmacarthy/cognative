import * as _ from 'lodash'


export const mean = (v: Vector) => _.sum(v) / _.size(v)

export const vMean = (v: Vector) => _.map(v, () => mean(v))

export const vSqrt = (v: Vector) => _.map(v, (n) => Math.sqrt(n))

export const vAdd = (v: Vector) => _.sum(v)

export const vMultiply = (v: Vector) => _.reduce(v, (a, b) => a * b)

export const vSubtract = (v: Vector) => _.reduce(v, (a, b) => a - b)

export const vAbs = (v: Vector) => _.map(v, (n) => Math.abs(n))

export const vReverse = (x: Vector) => _.reverse(x)

export const vDouble = (v: Vector) => _.map(v, x => x * 2)

export const vStd = (v: Vector) =>
  Math.sqrt(mean(_.map(v, (n) => _.multiply(n - mean(v), n - mean(v)))))

export const vZeros = (n: number) => _.fill(Array(n), 0)

export const vRandom = (n: number, min = 0, max = 1) => _.map(_.times(n), () => _.random(min, max, true))

export const vCumSum = (v: Vector) =>
  _.map(
    v,
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )

export const vPow = (v: Vector, p: number) => _.map(v, (x) => x ** p)
