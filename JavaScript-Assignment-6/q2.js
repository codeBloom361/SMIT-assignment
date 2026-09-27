console.log('--- Answer 2 ---');
const students = ['Alex', 'Sara', 'John', 'Emma', 'David'];
console.log('Initial array:', students);

students.push('Michael');
console.log('After push("Michael"):', students);

students.pop();
console.log('After pop():', students);

students.unshift('Sophia');
console.log('After unshift("Sophia"):', students);

students.shift();
console.log('After shift():', students);

console.log('Final student count (length):', students.length);