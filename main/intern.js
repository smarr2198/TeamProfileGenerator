const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, univeristy) {
    super(name, id, email, univeristy);
    this.university = univeristy;
  }
  getUniversity() {
    return this.university;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
