function addUser() {
  var nameField = document.getElementById("name-field");
  var moduleField = document.getElementById("module-field");
  var yearField = document.getElementById("year-field");

  console.log(nameField.value);
  console.log(moduleField.value);
  console.log(yearField.value);

  const nameHeading = document.getElementById("name-heading");
  const moduleHeading = document.getElementById("module-heading");
  const yearHeading = document.getElementById("year-heading");

  nameHeading.innerText = "Name: " + nameField.value;
  moduleHeading.innerText = "Module:" + moduleField.value;
  yearHeading.innerText = "Year: " + yearField.value;
}

function addUserRow() {
  // create td - cell
  // set data in innerText of td
  // create tr - row
  // add data in row

  var nameField = document.getElementById("name-field");
  var moduleField = document.getElementById("module-field");
  var yearField = document.getElementById("year-field");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const db = document.createElement("button");
  db.innerText = "Delete";
  db.onclick = function (event) {
    console.log(event);
    row.remove();
  };

  td1.innerText = nameField.value;
  td2.innerText = moduleField.value;
  td3.innerText = yearField.value;
  td4.appendChild(db);

  const row = document.createElement("tr");
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  const table = document.getElementsByTagName("table");
  console.log(table);
  table[0].appendChild(row);

  nameField.value = "";
  moduleField.value = "";
  yearField.value = "";
}
