// var x = prompt("Where does the Pope live?");

// if (x.toLowerCase() === "Vatican".toLowerCase()) {
//   alert("Correct!");
// } else {
//   alert("Wrong answer");
// }

// let age = 60;
// let res = "U.S.";
// let x = age > 65 || (age < 21 && res === "U.S.");
// console.log(x);

// age = 80;
// res = "PAK";
// x = age > 65 || (age < 21 && res === "U.S.");
// console.log(x);

// age = 2;
// res = "U.S.";
// x = (age > 65 || age < 21) && res === "U.S.";
// console.log(x);

// if (age > 65 || age < 21) {
//   if (res === "U.S.") {
//     console.log("PASS");
//   }
// }

// const y = "Module 1"; // string
// const z = 1234; // number
// const a = true; // boolean
// const b = false; // boolean

// const arr = [y, 234, true, a, b, z];
// // 0, 1, 2, 3, 4, 5, 6

// console.log(arr[5]);

// const numbers = [];

// numbers.push(23); // [22]
// numbers.push("1st"); // [22, "1st"]
// numbers.push("false"); // [22, "1st", "false"]
// numbers.push(true); // [22, "1st", "false", "true"]
// numbers.push(99999); // [22, "1st", "false", "true", 99999]
// numbers.pop(); // [22, "1st", "false", "true"]
// numbers.push("q"); // [22, "1st", "false", "true", "q"]
// numbers.pop(); // [22, "1st", "false", "true"]
// numbers.pop(); // [22, "1st", "false"]

// console.log(numbers);

/**
 * Array
 * - declare (const arr = [];)
 * - push
 * - pop
 * - shift
 * - unshift
 * - length
 *
 */

/**
 * Make list of 5 Cities of Pakistan
 * Take input from user
 *
 * Compare the user's input with list of cities
 * if it is present in the list
 *    print "city is listed"
 * if it is not present in the list
 *    print
 *
 */

// const cities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

// const userInput = prompt("Enter City");

// if (userInput == cities[0]) {
//   console.log("City is listed");
// } else if (userInput == cities[1]) {
//   console.log("City is listed");
// } else if (userInput == cities[2]) {
//   console.log("City is listed");
// } else if (userInput == cities[3]) {
//   console.log("City is listed");
// } else {
//   console.log("City is not listed");
// }

const cities = ["Karachi", "Islamabad", "Lahore", "Peshawar"];
const userInput = prompt("Enter City");

if (
  userInput.toLowerCase() == cities[0].toLowerCase() ||
  userInput.toLowerCase() == cities[1].toLowerCase() ||
  userInput.toLowerCase() == cities[2].toLowerCase() ||
  userInput.toLowerCase() == cities[3].toLowerCase()
) {
  console.log("City is listed");
} else {
  console.log("City is not listed");
}
