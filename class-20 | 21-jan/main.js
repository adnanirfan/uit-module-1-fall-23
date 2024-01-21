// var doomsday = new Date("June 30, 2035")

// console.log(doomsday.getMonth()); // index of June
// console.log(doomsday.getdate()); // 30
// console.log(doomsday.getFullYear()); // 2035
// console.log(doomsday.getHours()); //
// console.log(doomsday.getMinutes()); //

function getDifference() {
  var dateElement = document.getElementById("dateId");
  console.log(dateElement.value);
  console.log(dateElement.valueAsDate);

  var today = new Date();
  var doomsday = new Date(dateElement.valueAsDate);
  var msToday = today.getTime();
  var msDoomsday = doomsday.getTime();
  var msDiff = msDoomsday - msToday;
  var dDiff = msDiff / (1000 * 60 * 60 * 24);
  dDiff = Math.floor(dDiff);

  console.log(dDiff);

  var resultElement = document.getElementById("number");
  resultElement.innerText = dDiff;

  return dDiff;
}

function greetUser(name, course, year) {
  var str = "Hello " + name ;

  var resultElement = document.getElementById("number");
  resultElement.innerText = str;
  
  var moduleElement = document.getElementById("module");
  moduleElement.innerText = course;

  var yearElement = document.getElementById("year");
  yearElement.innerText = year;

  return str;
}

console.log(greetUser("Adnan", "Module 1", "2024"));
