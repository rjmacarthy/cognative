import _ from 'lodash'

import { compose, rowFnx } from './base'
import { rot, rotC } from './rotate'

const meanNs = _.memoize((ns) => _.sum(ns) / _.size(ns))

export const mean = (x) =>
  compose(
    rot,
    (x) => rowFnx(x, (ns) => _.map(ns, () => _.sum(ns) / _.size(ns))),
    rotC,
  )(x)

export const sqrt = (x) =>
  compose(
    rot,
    (x) => rowFnx(x, (ns) => _.map(ns, (n) => Math.sqrt(n))),
    rotC,
  )(x)

export const stddev = (x) =>
  compose(rot, (x) =>
    rowFnx(x, (ns) =>
      Math.sqrt(
        meanNs(_.map(ns, (n) => _.multiply(n - meanNs(ns), n - meanNs(ns)))),
      ),
    ),
  )(x)
