let num1 = "";
let num2 = "";
let operator = "";

const display = document.getElementById("display");

function updateDisplay() {
  if (num1 === "") {
    display.innerText = "0";
  } else if (operator === "") {
    display.innerText = num1;
  } else if (num2 === "") {
    display.innerText = num1 + " " + operator;
  } else {
    display.innerText = num1 + " " + operator + " " + num2;
  }
}

function appendNumber(digit) {
  if (operator === "") {
    num1 += digit;
  } else {
    num2 += digit;
  }
  updateDisplay();
}

function setOperator(op) {
  if (num1 !== "" && num2 === "") {
    operator = op;
    updateDisplay();
  }
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  updateDisplay();
}

// 4 calculation functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function calculate() {
  if (num1 === "" || num2 === "" || operator === "") return;

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result = 0;

  if (operator === "+") {
    result = add(n1, n2);
  } else if (operator === "-") {
    result = subtract(n1, n2);
  } else if (operator === "x") {
    result = multiply(n1, n2);
  } else if (operator === "/") {
    if (n2 === 0) {
      display.innerText = "Cannot divide by zero";
      num1 = "";
      num2 = "";
      operator = "";
      return;
    }
    result = divide(n1, n2);
  }

  display.innerText = result;
  num1 = result.toString();
  num2 = "";
  operator = "";
}