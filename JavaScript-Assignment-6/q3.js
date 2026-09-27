console.log('--- Answer 3 ---');
const numbers1 = [10, 20, 30];
const numbers2 = [40, 50, 60];

const combined = numbers1.concat(numbers2);
console.log('Combined Array:', combined);

const slicedArray = combined.slice(1, 4);
console.log('Sliced Array:', slicedArray);

combined.splice(2, 1);
console.log('After splice:', combined);

combined.splice(2, 0, 99);
console.log('After splice:', combined);

delete combined[1];

console.log('Array after delete:', combined);
console.log('Length after delete:', combined.length);
