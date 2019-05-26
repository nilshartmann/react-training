import { sum } from "./sum";

test("2 plus 2 should be four", () => {
  expect(sum(2, 2)).toBe(4);
});

test("2 plus 3 should not be four", () => {
  expect(sum(2, 3)).not.toBe(4);
});
