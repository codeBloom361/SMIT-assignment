console.log("--- Answer 3 ---")
// Predefined credentials
const correctUsername = "admin";
const correctPassword = "password123";

// Entered credentials to test
let enteredUsername = "admin";
let enteredPassword = "password123";

// Validation check
if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}