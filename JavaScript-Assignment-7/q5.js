// Employee Object Methods
// First Employee Object
const employee1 = {
  empId: "EMP-101",
  firstName: "Sarah",
  lastName: "Khan",
  department: "Marketing",
  designation: "Manager",
  salary: 95000,
  
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },

  getDetails: function() {
    return `Employee ID ${this.empId} works in the ${this.department} department.`;
  }
};

// Second Employee Object
const employee2 = {
  empId: "EMP-102",
  firstName: "Ali",
  lastName: "Raza",
  department: "Finance",
  designation: "Analyst",
  salary: 75000,

  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },

  getDetails: function() {
    return `Employee ID ${this.empId} works in the ${this.department} department.`;
  }
};

console.log("Employee 1 Full Name:", employee1.getFullName());
console.log("Employee 1 Details:", employee1.getDetails());

console.log("Employee 2 Full Name:", employee2.getFullName());
console.log("Employee 2 Details:", employee2.getDetails());