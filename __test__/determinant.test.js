import { determinant } from "../lib/algorithms/determinant"

test("base", () => {

  expect(
    determinant([[1,2,3], [1,2,3]])
  ).toEqual(0)

  expect(
    determinant([
      [8, 15],
      [7, -3]
    ])
  ).toEqual(-129)
})
