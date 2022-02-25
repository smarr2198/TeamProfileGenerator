const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getEmployee() {
    return "Engineer";
  }
}

module.exports = Engineer;
