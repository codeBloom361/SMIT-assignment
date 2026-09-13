
console.log("--- Answer 2 ---");
function calculateGrade(marks) {
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A";
  } else if (marks >= 80 && marks < 90) {
    grade = "B";
  } else if (marks >= 70 && marks < 80) {
    grade = "C";
  } else if (marks >= 60 && marks < 70) {
    grade = "D";
  } else if (marks >= 0 && marks < 60) {
    grade = "F";
  } else {
    grade = "Invalid Marks";
  }

  console.log(`Marks: ${marks} | Grade: ${grade}`);
}

// Testing with three different marks
calculateGrade(95);
calculateGrade(73);
calculateGrade(52);