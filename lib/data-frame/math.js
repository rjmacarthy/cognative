import { compose, sFn } from '../base/base'
import { rot, rotC } from '../base/rotate'
import { sMean, sSqrt, sStd, sCumSum, sAdd, sReverse, sDivide, sMultiply, sSubtract, sAbs } from '../series/math'

export const mean = (x) => compose(rot, (x) => sFn(x, sMean), rotC)(x)

export const sqrt = (x) => compose(rot, (x) => sFn(x, sSqrt), rotC)(x)

export const stddev = (x) => compose(rot, (x) => sFn(x, sStd))(x)

export const cumSum = (x) => compose(rotC, (x) => sFn(x, sCumSum), rot)(x)

export const add = (x) => compose(rot, (x) => sFn(x, sAdd))(x)

export const subtract = (x) => compose(rot, (x) => sFn(x, sSubtract))(x)

export const divide = (x) => compose(rot, (x) => sFn(x, sDivide))(x)

export const multiply = (x) => compose(rot, (x) => sFn(x, sMultiply))(x)

export const abs = (x) => sFn(x, sAbs)
