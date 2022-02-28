const Employee = require("../employee");
describe("employee", () => {
  test("Testing to get the correct name", () => {
    const ExampleOne = new Employee("stephen", 1, "smarr2198@gmail.com");
    expect(ExampleOne.getName()).toBe("stephen");
  });
  test("Testing to get the correct ID", () => {
    const ExampleTwo = new Employee("stephen", 2, "smarr2198@gmail.com");
    expect(ExampleTwo.getId()).toBe(2);
  });
  test("Testing for correct email", () => {
    const ExampleThree = new Employee("stephen", 2, "smarr2198@gmail.com");
    expect(ExampleThree.getEmail()).toBe("smarr2198@gmail.com");
  });
  test("testing for correct role", () => {
    const ExampleFour = new Employee("stephen", 2, "smarr2198@gmail.com");
    expect(ExampleFour.getRole()).toBe("Employee");
  });
});
