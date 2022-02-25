const createManagerProfile = function (manager) {
  return `
    <div class="card d-flex flex-wrap container bg-c mt-5" style="width: 18rem;">
        <div class="card-body bg-primary mx-0">
            <h5 class="card-title">${manager.name}</h5>
            <h5 class="card-title mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-fill" viewBox="0 0 16 16">
            <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z"/>
          </svg>   Manger</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
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
            <h5 class="card-title mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
          </svg>   Engineer</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">Github <a href = "https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
};

const createInternProfile = function (intern) {
  return `
    <div class="card d-flex flex-wrap container bg-c mt-5" style="width: 18rem;">
        <div class="card-body bg-primary mx-0">
            <h5 class="card-title">${intern.name}</h5>
            <h5 class="card-title mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
          </svg>   Intern</h5>
        </div>
        <ul class="list-group list-group-flush py-3">
            <li class="list-group-item w-100">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
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
