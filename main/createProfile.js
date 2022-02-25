const createManagerProfile = function (manager) {
  return `
    <div class="card d-flex flex-wrap container bg-c mt-5" style="width: 18rem;">
        <div class="card-body bg-primary mx-0">
            <h5 class="card-title">${manager.name}</h5>
            <h5 class="card-title mb-2">Manger</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">OfficeNumber: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
};

const createEngineerProfile = function (engineer) {
  return `
    <div class="card d-flex flex-wrap container bg-c mt-5" style="width: 18rem;">
        <div class="card-body bg-primary mx-0">
            <h5 class="card-title">${engineer.name}</h5>
            <h5 class="card-title mb-2">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
    </div>
    `;
};

const createInternProfile = function (intern) {
  return `
    <div class="card d-flex flex-wrap container bg-c mt-5" style="width: 18rem;">
        <div class="card-body bg-primary mx-0">
            <h5 class="card-title">${intern.name}</h5>
            <h5 class="card-title mb-2">Intern</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">University: ${intern.university}</li>
        </ul>
    </div>
    `;
};

createProfileHTML = (data) => {
  profileArray = [];

  for (let i = 0; i < data.length; i++) {
    const employeeData = data[i];
    const employeeMember = employeeData.getRole();

    if (employeeMember === "Manager") {
      const managerProfile = createManagerProfile(employeeData);
      profileArray.push(managerProfile);
    }

    if (employeeMember === "Engineer") {
      const engineerProfile = createEngineerProfile(employeeData);
      profileArray.push(engineerProfile);
    }

    if (employeeMember === "Intern") {
      const internProfile = createInternProfile(employeeData);
      profileArray.push(internProfile);
    }
  }
  const profileCards = profileArray.join("");
  const createProfile = createProfilePage(profileCards);

  return createProfile;
};

const createProfilePage = function (profileCards) {
  return `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>

<body>
  <nav>
    <div class="fs-1 c-white bg-danger text-center py-4"> Team Profile</div>
  </nav>
    <div class="row justify-content-center">
        <!--Team Cards-->
        ${profileCards}
    </div>
</body>
</html>
`;
};

module.exports = createProfileHTML;
