// Student Search System
const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

const isAyeshaPresent = students.includes('Ayesha');
console.log('Is Ayesha present?:', isAyeshaPresent);

const firstSaraIndex = students.indexOf('Sara');
const lastSaraIndex = students.lastIndexOf('Sara');
console.log('First position of Sara:', firstSaraIndex);
console.log('Last position of Sara:', lastSaraIndex);

const firstAStudent = students.find(student => student.startsWith('A'));
const firstAIndex = students.findIndex(student => student.startsWith('A'));
console.log('First student starting with A:', firstAStudent);
console.log('Index of first student starting with A:', firstAIndex);

const lastLongName = students.findLast(student => student.length > 4);
const lastLongNameIndex = students.findLastIndex(student => student.length > 4);
console.log('Last student with name length > 4:', lastLongName);
console.log('Index of last student with name length > 4:', lastLongNameIndex);