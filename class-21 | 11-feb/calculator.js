function add() {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(typeof firstNumber);
  console.log(typeof secondNumber);

  const result = firstNumber + secondNumber;

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + result;
}

function sub() {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(typeof firstNumber);
  console.log(typeof secondNumber);

  const result = firstNumber - secondNumber;

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + result;
}

function mul() {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(typeof firstNumber);
  console.log(typeof secondNumber);

  const result = firstNumber * secondNumber;

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + result;
}

function div() {
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(typeof firstNumber);
  console.log(typeof secondNumber);

  const result = firstNumber / secondNumber;

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result: " + result.toFixed(3);
}

function calculate(operator) {
  console.log(operator);
  const firstNumber = Number(document.getElementById("first-number").value);
  const secondNumber = Number(document.getElementById("second-number").value);

  console.log(typeof firstNumber);
  console.log(typeof secondNumber);

  let result;
  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
    result = result.toFixed(3);
  }

  const resultElement = document.getElementById("result");
  resultElement.innerText = "Result" + "(" + operator + "): " + result;
}
