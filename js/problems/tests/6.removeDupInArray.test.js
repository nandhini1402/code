import removeDup from "../6.removeDupInArray";

describe("removeDup()", () => {
  it("should retun empty array if input array is empty", () => {
    expect(removeDup([])).toEqual([]);
  });

  it("should remove the dupicates from input array", () => {
    expect(removeDup([1, 2, 3, 1, 2, 3, 4, 5, 5])).toEqual([4]);
    expect(removeDup([-1, -2, 3, -1, -2, 3, 4, 5, 5])).toEqual([4]);
  });
});
