/* eslint-disable @typescript-eslint/ban-types */
import * as _ from 'lodash'
import { map, unzip, zip } from 'lodash/fp'

export const compose = (...fns: Function[]) =>
  (args: Matrix) =>
    _.reduce(fns, (arg, fn: Function) => fn(arg), args)

export const sFn = (x: Matrix) => (fn: (s: Series) => SeriesResult) =>
  map(
    _.memoize((r: Series) => fn(r))
  )(x)

export const sFill = (size: number, x: number) => _.fill(Array(size), x)

export const swap = (arr: number[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

export const transpose = (x: Matrix): Matrix => 
  unzip(map((row: Series) => row)(x))

export const inverseTranspose = (matrix: Matrix): Matrix => 
  unzip(matrix)

export const shape = _.memoize((x: Matrix) => [_.size(x), _.size(_.first(x))])

export const isSquare = _.memoize(
  (x) => _.get(shape(x), 0) === _.get(shape(x), 1)
)

export const isSameShape = (x: Matrix, y: Matrix) =>
  _.get(shape(x), 0) === _.get(shape(y), 0) &&
  _.get(shape(x), 1) === _.get(shape(y), 1)

export const is1d = (x: Matrix) => _.get(shape(x), 0) === 1

// implement train test split random based on test size.
