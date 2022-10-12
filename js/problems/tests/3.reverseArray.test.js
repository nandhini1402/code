import reverseArray from "../3.reverseArray";

describe("reverseArray()", () => {
  it("should return empty array if input is not present", () => {
    expect(reverseArray([])).toEqual([]);
  });

  it("should return empty array if input is in correct", () => {
    expect(reverseArray(["1", "10", "100"])).toEqual(["100", "10", "1"]);
  });

  it("should return [1,2,3,4,5] if input is [5,4,3,2,1]", () => {
    expect(reverseArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return [a,b,c,d,e] if input is [e,d,c,b,a]", () => {
    expect(reverseArray(["e", "d", "c", "b", "a"])).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
    ]);
  });
});
