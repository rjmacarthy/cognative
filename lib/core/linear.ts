import { dot } from '../matrix'

import * as _ from 'lodash'
import { random } from '../matrix'

export class Linear {
  weights: number[][]
  bias: number[]
  constructor(inputSize: number, outputSize: number) {
    this.weights = random(inputSize, outputSize)
    this.bias = random(outputSize, 1)[0]
  }

  forward(x: number[]) {
    return _.map(_.times(_.size(this.bias)), (i: number) =>
      _.add(dot(_.get(this.weights, i), x), _.get(this.bias, i))
    )
  }
}
