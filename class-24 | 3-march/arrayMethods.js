// push
// pop
// shift
// unshift
// splice
// slice
// map
// filter
// reduce
// forEach

// const ar = [1, 2, 3];

// ar.forEach((value, index) => {
//   console.log(value, index);
// });

// const newAr = ar.map((value, index) => {
//   console.log(value, index);
//   return value * value;
// });

// console.log(ar);
// console.log(newAr);

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const callbackFunction = (value, index) => {
  return value % 2 === 0;
};

// function callbackFunction(value, index) {
//   return value % 2 === 0;
// }

const filteredValues = ar.filter(callbackFunction);

console.log("Original Array", ar);
console.log("Filtered Array", filteredValues);
