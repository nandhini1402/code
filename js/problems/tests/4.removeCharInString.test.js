import removeChar from "../4.removeCharInString";

describe("removeChar()", () => {
  it("should return empty string if input is not present", () => {
    expect(removeChar("", "o")).toEqual("");
    expect(removeChar("abc", "")).toEqual("abc");
    expect(removeChar()).toEqual("");
  });

  it("should remove the char o from input string", () => {
    expect(removeChar("hello world", "o")).toEqual("hell wrld");
  });

  it("should remove the char l from input string", () => {
    expect(removeChar("hello world", "l")).toEqual("heo word");
  });
});
