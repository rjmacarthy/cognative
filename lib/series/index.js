import _ from 'lodash'

export const mean = (ns) => _.sum(ns) / _.size(ns)

export const sMean = (ns) => _.map(ns, () => mean(ns))

export const sSqrt = (ns) => _.map(ns, (n) => Math.sqrt(n))

export const sAdd = (ns) => _.sum(ns)

export const sDivide = (ns) => _.reduce(ns, (a, b) => a / b)

export const sMultiply = (ns) => _.reduce(ns, (a, b) => a * b)

export const sSubtract = (ns) => _.reduce(ns, (a, b) => a - b)

export const sAbs = (ns) => _.map(ns, (n) => Math.abs(n))

export const sReverse = (x) => _.reverse(x)

export const sDouble = (ns) => _.map(ns, x => x * 2)

export const sStd = (ns) =>
  Math.sqrt(mean(_.map(ns, (n) => _.multiply(n - mean(ns), n - mean(ns)))))

export const sZeros = (n) => _.fill(Array(n), 0, 0)

export const sRandom = (n, min = 0, max = 1) => _.fill(Array(n), _.random(min, max, true))

export const sCumSum = (ns) =>
  _.map(
    ns,
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )

export const sPow = (ns, p) => _.map(ns, (x) => x ** p)
