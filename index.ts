import * as dfMath from "./lib/df/math"
import * as sMath from "./lib/s/math"
import * as base from "./lib/base/base"
import * as rotate from "./lib/rotate"
import * as shape from "./lib/shape"

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
