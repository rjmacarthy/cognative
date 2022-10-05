import _ from 'lodash'
import { compose, rowFnx } from '../base/base'
import { rot, rotC } from '../base/rotate'
import { sMean, sSqrt, sStd, sCumSum, sAdd, sReverse, sDivide, sMultiply, sSubtract, sAbs } from '../series/math'

export const mean = (x) => compose(rot, (x) => rowFnx(x, sMean), rotC)(x)

export const sqrt = (x) => compose(rot, (x) => rowFnx(x, sSqrt), rotC)(x)

export const stddev = (x) => compose(rot, (x) => rowFnx(x, sStd))(x)

export const cumSum = (x) => compose(rotC, (x) => rowFnx(x, sCumSum), rot)(x)

export const add = (x) => compose(rotC, (x) => rowFnx(x, sAdd), sReverse)(x)

export const subtract = (x) => compose(rotC, (x) => rowFnx(x, sSubtract), sReverse)(x)

export const divide = (x) => compose(rotC, (x) => rowFnx(x, sDivide(ns, 5)), sReverse)(x)

export const multiply = (x) => compose(rotC, (x) => rowFnx(x, sMultiply), sReverse)(x)

export const abs = (x) => rowFnx(x, sAbs)
