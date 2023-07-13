import  * as lodash from 'lodash'
import { Linear } from './linear'

export class NeuralNetwork {
  inputSize: number
  hiddenSize: number
  outputSize: number
  linear1: Linear
  linear2: Linear

  constructor(inputSize: number, hiddenSize: number, outputSize: number) {
    this.inputSize = inputSize
    this.hiddenSize = hiddenSize
    this.outputSize = outputSize
    this.linear1 = new Linear(inputSize, hiddenSize)
    this.linear2 = new Linear(hiddenSize, outputSize)
  }

  relu(x: number[]) {
    return lodash.map(x, (x) => Math.max(0, x))
  }

  forward(x: number[]) {
    const hiddenLayer = this.linear1.forward(x)
    const activatedHiddenLayer = this.relu(hiddenLayer)
    const outputLayer = this.linear2.forward(activatedHiddenLayer)
    debugger
    return outputLayer
  }
}
