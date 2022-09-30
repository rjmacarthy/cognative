import _ from 'lodash'

export const compose =
  (...fns) =>
    (args) =>
      _.reduce(fns, (arg, fn) => fn(arg), args)

export const rowFnx = (x, fn) =>
  _.map(
    x,
    _.memoize((_r, i) => fn(_.get(x, i)))
  )
