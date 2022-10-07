import { sDouble, sReverse } from "../lib/series"

test("base", () => {
  expect(sDouble([1, 2])).toEqual([2, 4])
  
  expect(sReverse([1, 2])).toEqual([2, 1])
})
