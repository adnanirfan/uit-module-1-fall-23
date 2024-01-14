// for (let i = 0; i < 5; i++) {
//   console.log("" + i);
// }
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6

// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  console.log(str);
}
