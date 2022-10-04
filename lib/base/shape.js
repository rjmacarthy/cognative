import _ from 'lodash'

import { rot } from './rotate'

export const shape = _.memoize((x) => [_.size(x), _.size(rot(x))])
