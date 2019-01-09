import { sum } from "../src/sum";

test("sum of 2 and 2 is 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("sum of 2 and 2 is not 3", () => {
  expect(sum(2, 2)).not.toBe(3);
});
