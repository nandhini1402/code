import calculator from "../5.calculator";

describe("calculator()", () => {
  it("should empty string if operator or number is not present", () => {
    expect(calculator()).toEqual("");
  });

  it("should return the addition of two numbers", () => {
    expect(calculator(10, 2, "+")).toEqual(12);
  });

  it("should return the subtraction of two numbers", () => {
    expect(calculator(10, 2, "-")).toEqual(8);
  });

  it("should return the division of two numbers", () => {
    expect(calculator(10, 2, "/")).toEqual(5);
  });

  it("should return the multiplication of two numbers", () => {
    expect(calculator(10, 2, "*")).toEqual(20);
  });
});
