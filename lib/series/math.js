import _ from 'lodash'

export const mean = (ns) => _.sum(ns) / _.size(ns)

export const sMean = (ns) => _.map(ns, () => mean(ns))

export const sSqrt = (ns) => _.map(ns, (n) => Math.sqrt(n))

export const sStd = (ns) =>
  Math.sqrt(mean(_.map(ns, (n) => _.multiply(n - mean(ns), n - mean(ns)))))

export const sCumSum = (ns) =>
  _.map(
    ns,
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  )
