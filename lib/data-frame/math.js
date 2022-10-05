import { compose, sFn } from '../base/base'
import { rot, rotC } from '../base/rotate'
import { sMean, sSqrt, sStd, sCumSum, sAdd, sReverse, sDivide, sMultiply, sSubtract, sAbs } from '../series/math'

export const mean = (x) => compose(rot, (x) => sFn(x, sMean), rotC)(x)

export const sqrt = (x) => compose(rot, (x) => sFn(x, sSqrt), rotC)(x)

export const stddev = (x) => compose(rot, (x) => sFn(x, sStd))(x)

export const cumSum = (x) => compose(rotC, (x) => sFn(x, sCumSum), rot)(x)

export const add = (x) => compose(rotC, (x) => sFn(x, sAdd), sReverse)(x)

export const subtract = (x) => compose(rotC, (x) => sFn(x, sSubtract), sReverse)(x)

export const divide = (x) => compose(rotC, (x) => sFn(x, sDivide), sReverse)(x)

export const multiply = (x) => compose(rotC, (x) => sFn(x, sMultiply), sReverse)(x)

export const abs = (x) => sFn(x, sAbs)
