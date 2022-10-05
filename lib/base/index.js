import _ from 'lodash'

export const compose =
  (...fns) =>
    (args) =>
      _.reduce(fns, (arg, fn) => fn(arg), args)

export const sFn = (x, fn) =>
  _.map(
    x,
    _.memoize((r) => fn(r))
  )

export const sFill = (size, x) => _.fill(Array(size), x)

export const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

export const rot = _.memoize((x) =>
  _.map(_.first(x), (_v, i) => _.reverse(_.map(x, (r) => r[i])))
)

export const rotC = _.memoize((x) =>
  _.map(_.first(x), (_v, i) => _.map(x, (r) => r[_.size(r) - 1 - i]))
)


export const shape = _.memoize((x) => [_.size(x), _.size(rot(x))])