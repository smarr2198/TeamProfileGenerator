class Employee {
  constructor(name, id, email, officeNumber, github, university, employee) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.github = github;
    this.university = university;
    this.employee = employee;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getGithub() {
    return this.github;
  }

  getUniversity() {
    return this.university;
  }

  getEmployee() {
    return this.employee;
  }
}
module.exports = Employee;
