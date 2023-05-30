import { dot } from '../data-frame'
import { random } from '../data-frame'


export class LinearLayer {
  weights: number[][]
  bias: number[]
  constructor(inputSize: number, outputSize: number) {
    this.weights = random(inputSize, outputSize)
    this.bias = random(outputSize, 1)[0]
  }

  forward(x: number[]) {
    const output = []
    for (let i = 0; i < this.bias.length; i++) {
      const weightedSub = dot(this.weights[i], x)
      const activation = weightedSub + this.bias[i]
      output.push(activation)
    }
    return output
  }
}
