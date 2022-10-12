import reverse from "../2.reverseString";

describe("reverse()", () => {
  it("should return empty string if input is incorrect", () => {
    expect(reverse("")).toEqual("");
    expect(reverse(undefined)).toEqual("");
    expect(reverse(null)).toEqual("");
    expect(reverse(true)).toEqual("");
    expect(reverse([])).toEqual("");
    expect(reverse({})).toEqual("");
    expect(reverse(0)).toEqual("");
    expect(reverse([[]])).toEqual("");
  });

  it("should return olleh string if input is hello", () => {
    expect(reverse("hello")).toEqual("olleh");
  });

  it("should return hello string if input is olleh", () => {
    expect(reverse("olleh")).toEqual("hello");
  });

  it("should return dlrow olleh string if input is hello world", () => {
    expect(reverse("hello world")).toEqual("dlrow olleh");
  });
});
