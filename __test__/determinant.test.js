import { determinant } from "../lib/algorithms/determinant"

test("base", () => {
  expect(
    determinant([
      [8, 15],
      [7, -3]
    ])
  ).toEqual(-129)
})
