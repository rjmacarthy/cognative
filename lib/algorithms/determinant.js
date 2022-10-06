import _ from 'lodash'
import { isSquare, shape } from '../base'

export const determinant = (x) => {
  if (!isSquare(x)) {
    return 0
  }

  if (_.first(shape(x)) === 2) {
    return (
      _.get(_.first(x), 0) * _.get(_.last(x), 1) -
      _.get(_.first(x), 1) * _.get(_.last(x), 0)
    )
  }
}
