const Intern = require("../intern");

describe("intern", () => {
  test("Testing for the Name", () => {
    const ExampleOne = new Intern(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "northwestern"
    );
    expect(ExampleOne.getName()).toBe("stephen");
  });
  test("testing for University", () => {
    const ExampleTwo = new Intern(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "northwestern"
    );
    expect(ExampleTwo.getUniversity()).toBe("northwestern");
  });
  test("Test for role", () => {
    const ExampleThree = new Intern(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "smarr2198"
    );
    expect(ExampleThree.getRole()).toBe("Intern");
  });
});
