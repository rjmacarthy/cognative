import * as _ from 'lodash'

export const compose = (...fns: Function[]) =>
    (args: Matrix) =>
      _.reduce(fns, (arg, fn: Function) => fn(arg), args)

export const sFn = (x: Matrix, fn: (s: Series) => SeriesResult) =>
  _.map(
    x,
    _.memoize((r: Series) => fn(r))
  )

export const sFill = (size: number, x: number) => _.fill(Array(size), x)

export const swap = (arr: Array<any>, i: any, j: any) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

export const transpose = _.memoize((x : Matrix) =>
  _.map(_.first(x), (_v: Series, i: number) => _.reverse(_.map(x, (r) => r[i])))
)

export const inverseTranspose = _.memoize((x : Matrix) =>
  _.map(_.first(x), (_v: Series, i: number) => _.map(x, (r: number[]) => r[_.size(r) - 1 - i]))
)

export const shape = _.memoize((x : Matrix) => [_.size(x), _.size(_.first(x))])

export const isSquare = _.memoize(
  (x) => _.get(shape(x), 0) === _.get(shape(x), 1)
)

export const isSameShape = (x: Matrix, y: Matrix) =>
  _.get(shape(x), 0) === _.get(shape(y), 0) &&
  _.get(shape(x), 1) === _.get(shape(y), 1)

export const is1d = (x: Matrix) => _.get(shape(x), 0) === 1

// implement train test split random based on test size.
