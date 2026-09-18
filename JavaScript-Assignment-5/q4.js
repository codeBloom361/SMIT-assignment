console.log("--- Answer 4 ---");
let totalCalled = 0;

for (let roll = 1; roll <= 20; roll++) {
  // Skip roll number 13
  if (roll === 13) {
    continue;
  }

  // Stop completely at roll number 18
  if (roll === 18) {
    break;
  }

  console.log("roll number " + roll);
  totalCalled++;
}

console.log("Total roll numbers called = " + totalCalled);