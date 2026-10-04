// Employee Record
const employee = {
  empId: "EMP-101",
  firstName: "John",
  lastName: "Doe",
  department: "Engineering",
  designation: "Software Engineer",
  salary: 85000
};

console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);

console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

employee.email = "john.doe@company.com";

employee.salary = 90000;

delete employee.lastName;

console.log("Final Employee Object:", employee);