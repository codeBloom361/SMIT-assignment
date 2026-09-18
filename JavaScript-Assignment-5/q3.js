console.log("--- Answer 3 ---");
let input = prompt("Enter a number:");
let n = parseInt(input);

if (isNaN(n) || n <= 0) {
  console.log("Please enter a valid positive number.");
} else {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}