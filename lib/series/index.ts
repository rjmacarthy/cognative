import * as _ from 'lodash'


export const mean = (ns: Series) => _.sum(ns) / _.size(ns)

export const sMean = (ns: Series) => _.map(ns, () => mean(ns))

export const sSqrt = (ns: Series) => _.map(ns, (n) => Math.sqrt(n))

export const sAdd = (ns: Series) => _.sum(ns)

export const sDivide = (ns: Series) => _.reduce(ns, (a, b) => a / b)

export const sMultiply = (ns: Series) => _.reduce(ns, (a, b) => a * b)

export const sSubtract = (ns: Series) => _.reduce(ns, (a, b) => a - b)

export const sAbs = (ns: Series) => _.map(ns, (n) => Math.abs(n))

export const sReverse = (x: Series) => _.reverse(x)

export const sDouble = (ns: Series) => _.map(ns, x => x * 2)

export const sStd = (ns: Series) =>
  Math.sqrt(mean(_.map(ns, (n) => _.multiply(n - mean(ns), n - mean(ns)))))

export const sZeros = (n: number) => _.fill(Array(n), 0, 0)

export const sRandom = (n: number, min = 0, max = 1) => _.fill(Array(n), _.random(min, max, true))

export const sCumSum = (ns: Series) =>
  _.map(
    ns,
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )

export const sPow = (ns: Series, p: number) => _.map(ns, (x) => x ** p)
