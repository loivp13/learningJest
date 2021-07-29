const { titleCase } = require("./textUtilities");
describe("testing titleCase", () => {
  test("returns string", () => {
    let result = typeof titleCase("the great mouse detective") === "string";
    expect(result).toBe(true);
  });

  test("returns uppercase first letter of each word", () => {
    expect(titleCase("the great mouse detective")).toBe(
      "The Great Mouse Detective"
    );
  });

  test("returns lower case for less important words", () => {
    expect(titleCase("In the jungle")).toBe("In the Jungle");
  });

  test("returns title case for incorrect grammer", () => {
    expect(titleCase("a bIg aPPle")).toBe("A Big Apple");
  });
});
