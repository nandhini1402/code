import sort from "../1.sort";

describe("sort()", () => {
  it("should return empty array if input is not present", () => {
    expect(sort()).toEqual([]);
  });

  it("should be able to sort the array in ascending order", () => {
    expect(sort([5, 2, 4, 3, 1], "asc")).toEqual([1, 2, 3, 4, 5]);
  });

  it("should be able to sort the array in descending order", () => {
    expect(sort([5, 2, 4, 3, 1], "desc")).toEqual([5, 4, 3, 2, 1]);
  });
});
