console.log("--- Answer 2 ---");
// 1. Function without parameters
function greet() {
  console.log("Welcome to JavaScript!");
}

// 2. Function with one parameter
function greetUser(name) {
  console.log("Welcome, " + name + "!");
}

// 3. Function with two parameters 
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Function Calls
greet();
greetUser("Ali");

const result = addNumbers(10, 25);
console.log("Sum:", result);