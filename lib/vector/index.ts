import * as _ from 'lodash'


export const mean = (ns: Series) => _.sum(ns) / _.size(ns)

export const vMean = (ns: Series) => _.map(ns, () => mean(ns))

export const vSqrt = (ns: Series) => _.map(ns, (n) => Math.sqrt(n))

export const vAdd = (ns: Series) => _.sum(ns)

export const vDivide = (ns: Series) => _.reduce(ns, (a, b) => a / b)

export const vMultiply = (ns: Series) => _.reduce(ns, (a, b) => a * b)

export const vSubtract = (ns: Series) => _.reduce(ns, (a, b) => a - b)

export const vAbs = (ns: Series) => _.map(ns, (n) => Math.abs(n))

export const vReverse = (x: Series) => _.reverse(x)

export const vDouble = (ns: Series) => _.map(ns, x => x * 2)

export const vStd = (ns: Series) =>
  Math.sqrt(mean(_.map(ns, (n) => _.multiply(n - mean(ns), n - mean(ns)))))

export const vZeros = (n: number) => _.fill(Array(n), 0, 0)

export const vRandom = (n: number, min = 0, max = 1) => _.map(_.times(n), () => _.random(min, max, true))

export const vCumSum = (ns: Series) =>
  _.map(
    ns,
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )

export const vPow = (ns: Series, p: number) => _.map(ns, (x) => x ** p)
