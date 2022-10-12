import removeDup from "../7.removeDupInArrayV2";

describe("removeDup()", () => {
  it("should retun empty array if input array is empty", () => {
    expect(removeDup([])).toEqual([]);
  });

  it("should remove the dupicates from input array", () => {
    expect(removeDup([1, 2, 3, 1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
