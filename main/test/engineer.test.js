const Engineer = require("../engineer");

describe("engineer", () => {
  test("Testing for the Name", () => {
    const ExampleOne = new Engineer(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "samrr2198"
    );
    expect(ExampleOne.getName()).toBe("stephen");
  });
  test("testing for github", () => {
    const ExampleTwo = new Engineer(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "smarr2198"
    );
    expect(ExampleTwo.getGithub()).toBe("smarr2198");
  });
  test("Test get row", () => {
    const ExampleThree = new Engineer(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "smarr2198"
    );
    expect(ExampleThree.getRole()).toBe("Engineer");
  });
});
