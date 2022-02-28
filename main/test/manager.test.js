const Manager = require("../manager");

describe("manager", () => {
  test("Testing for the Name", () => {
    const ExampleOne = new Manager(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "samrr2198"
    );
    expect(ExampleOne.getName()).toBe("stephen");
  });
  test("testing for Role", () => {
    const ExampleTwo = new Manager(
      "stephen",
      1,
      "smarr2198@gmail.com",
      "smarr2198"
    );
    expect(ExampleTwo.getRole()).toBe("Manager");
  });
});
