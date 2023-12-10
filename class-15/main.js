let s1 = +prompt("Enter Number for English");
let s2 = +prompt("Enter Number for Islamiat");
let s3 = +prompt("Enter Number for Urdu");
let s4 = +prompt("Enter Number for math");
let s5 = +prompt("Enter Number for Science");

let result;

const sum = s1 + s2 + s3 + s4 + s5;
let percentage = (sum / 500) * 100;

if (percentage >= 90) {
  result = "A+";
  console.log("result is A+");
} else if (percentage >= 80) {
  result = "A";
} else if (percentage >= 70) {
  result = "B";
} else if (percentage >= 60) {
  result = "C";
} else {
  result = "Fail";
}

console.log("Result is: " + result);

/* 
90+ A+
80+ A
70+ B
60+ C
<60 Fail

*/
