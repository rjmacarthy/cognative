import * as dfMath from './lib/data-frame'
import * as sMath from './lib/series'
import * as base from './lib/base'
import { rotate } from './lib/base/index'
import { shape } from './lib/base'

export default {
  base: {
    base,
    shape,
    rotate
  },
  s: {
    math: sMath
  },
  df: {
    math: dfMath
  }
}
