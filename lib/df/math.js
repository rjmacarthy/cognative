import { compose, rowFnx } from '../base/base'
import { rot, rotC } from '../base/rotate'
import { sMean, sSqrt, sStd, sCumSum } from '../s/math'

export const mean = (x) => compose(rot, (x) => rowFnx(x, sMean), rotC)(x)

export const sqrt = (x) => compose(rot, (x) => rowFnx(x, sSqrt), rotC)(x)

export const stddev = (x) => compose(rot, (x) => rowFnx(x, sStd))(x)

export const cumSum = (x) => compose(rotC, (x) => rowFnx(x, sCumSum), rot)(x)
