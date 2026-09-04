
var legacyVar = "I am declared with var";
let userAge = 25;
const BRAND_NAME = "TechNova";

console.log("--- Variable Declarations ---");
console.log("var:", legacyVar);
console.log("let:", userAge);
console.log("const:", BRAND_NAME);

// 2. JavaScript Data Types

console.log("--- JavaScript Data Types & typeof Checks ---");

// String: Represents textual data wrapped in quotes
let sampleString = "Hello, World!";
console.log("String:", sampleString, "| Type:", typeof sampleString);

// Number: Represents numbers
let sampleNumber = 42.5;
console.log("Number:", sampleNumber, "| Type:", typeof sampleNumber);

// Boolean: Represents two values: true or false
let isResponsive = true;
console.log("Boolean:", isResponsive, "| Type:", typeof isResponsive);

// Undefined: Variable that has been declared but not assigned a value yet
let sampleUndefined;
console.log("Undefined:", sampleUndefined, "| Type:", typeof sampleUndefined);

// Null: Represents an intentional absence of any object value
let sampleNull = null;
console.log("Null:", sampleNull, "| Type:", typeof sampleNull);

// Symbol: Unique and immutable primitive value used for object property keys
let sampleSymbol = Symbol("id");
console.log("Symbol:", sampleSymbol.toString(), "| Type:", typeof sampleSymbol);

// BigInt: Represents very large integers that are beyond the safe integer limit for Numbers
let sampleBigInt = 9007199254740991n;
console.log("BigInt:", sampleBigInt, "| Type:", typeof sampleBigInt);

// Object: Collection of key-value pairs representing complex structures
let sampleObject = {
  name: "TechNova",
  active: true,
  rating: 4.8
};
console.log("Object:", sampleObject, "| Type:", typeof sampleObject);

// Array: Ordered list of values
let sampleArray = ["HTML", "CSS", "JavaScript"];
console.log("Array:", sampleArray, "| Type:", typeof sampleArray);