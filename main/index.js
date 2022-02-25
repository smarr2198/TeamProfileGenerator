const fs = require("fs");
const inquirer = require("inquirer");

const createProfileHTML = require("./createProfile");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

const employeeArray = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Managers name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number.",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      employeeArray.push(manager);
    });
};

const createEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "What Employee Profile would you like to create?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Employee Name?",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Email",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Github",
        when: (input) => input.employee === "Engineer",
      },
      {
        type: "input",
        name: "university",
        message: "Enter the intern's university",
        when: (input) => input.employee === "Intern",
      },
      {
        type: "confirm",
        name: "confirmCreateEmployee",
        message: "Add another team member?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let {
        name,
        id,
        email,
        employee,
        github,
        university,
        confirmCreateEmployee,
      } = employeeData;
      let teamEmployee;

      if (employee === "Engineer") {
        teamEmployee = new Engineer(name, id, email, github);
      } else if (employee === "Intern") {
        teamEmployee = new Intern(name, id, email, university);
      }

      employeeArray.push(teamEmployee);

      if (confirmCreateEmployee) {
        return createEmployee(employeeArray);
      } else {
        return employeeArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your Index.html was created!!");
    }
  });
};

createManager()
  .then(createEmployee)
  .then((employeeArray) => {
    return createProfileHTML(employeeArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
