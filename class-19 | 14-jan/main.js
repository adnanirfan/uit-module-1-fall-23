// Math.round(2.4332);
// // 2
// Math.round(2.6332);
// // 3

// Math.floor(2.6332)
// // 2
// const scoreAvg = 2.6332
// // 2
// Math.floor(2.999)
// // 2

// Math.ceil(2.6332)
// // 3
// Math.ceil(2.4332)
// // 3
// Math.ceil(2.9999)
// // 3

// Math.random()

function generateRandomNumber() {
  var bigDecimal = Math.random(); // 0.523423423
  var improvedNum = bigDecimal * 6 + 1; // 5.540540538 + 1 // 6.540540538
  var numberOfStars = Math.floor(improvedNum); // 6
  console.log(numberOfStars);

  const numberElement = document.getElementById("number");
  numberElement.innerText = numberOfStars;
}

// parseInt()
// parseFloat()
// +"20"
// Number

// num.toString()
// num.toFixed(2)

// DATE
// const currentDate = new Date();
// [Jan,Feb,March,April,May,June,....]
/**
 * getDate()
 * getDay
 * getMonth
 * getYear
 * getHours
 * getMinutes
 * getMilliseconds
 *
 * setDate
 * ...
 */

function getTimeAndDate() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const fullYear = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const result =
    date +
    "/" +
    month +
    "/" +
    fullYear +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;

  const numberElement = document.getElementById("number");
  numberElement.innerText = result;
}
