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
  yearHeading.innerText = "Year: " +  yearField.value;
}
