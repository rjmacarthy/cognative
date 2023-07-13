import { NeuralNetwork } from '../lib/core/nn'

describe('nn', () => {
  test('nn', () => {
    const ll = new NeuralNetwork(2, 3, 1)
    const inputs = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ]

    inputs.forEach((input) => {
      const output = ll.forward(input)
      console.log(output)
    })
  })
})
