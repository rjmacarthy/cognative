import * as b from '../base'
import * as s from '../series'

export const mean = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sMean), b.inverseTranspose)(x)

export const sqrt = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sSqrt), b.inverseTranspose)(x)

export const stddev = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sStd))(x)

export const cumSum = (x) => b.compose(b.inverseTranspose, (x) => b.sFn(x, s.sCumSum), b.transpose)(x)

export const add = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sAdd))(x)

export const subtract = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sSubtract))(x)

export const divide = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sDivide))(x)

export const multiply = (x) => b.compose(b.transpose, (x) => b.sFn(x, s.sMultiply))(x)

export const abs = (x) => b.sFn(x, s.sAbs)
