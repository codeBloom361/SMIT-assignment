console.log('--- Answer 4 ---');
const sampleArray = ['JavaScript', 'Python', 'C++'];
const sampleString = 'Hello World';
const sampleNumber = 100;

console.log('sampleArray =', Array.isArray(sampleArray));
console.log('sampleString =', Array.isArray(sampleString));
console.log('sampleNumber =', Array.isArray(sampleNumber));

const showArray = (arr) => {
  console.log('Displaying array through arrow function:', arr);
};

showArray(sampleArray);

const displayValue = (val) => {
  console.log('Value received:', val);
};

displayValue(sampleNumber);