console.log('--- Answer 5 ---');
let products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'];
console.log('Initial Product List:', products);

console.log('Total products:', products.length);

console.log('First product (at 0):', products.at(0));
console.log('Last product (at -1):', products.at(-1));

products.push('Webcam');
console.log('After push("Webcam"):', products);

products.unshift('Microphone');
console.log('After unshift("Microphone"):', products);

products.pop();
console.log('After pop():', products);

products.shift();
console.log('After shift():', products);

const extraProducts = ['Desk', 'Chair'];
products = products.concat(extraProducts);
console.log('Total products with extra products:', products);

const smallList = products.slice(0, 3);
console.log('Smaller List', smallList);

products.splice(1, 1, 'Gaming Mouse');
console.log('After splice replacement:', products);

const productString = products.join(' | ');
console.log('Joined Product String:', productString);

const printList = (list) => {
  console.log('Final Products Array:', list);
};
printList(products);

console.log('Is product list an array?', Array.isArray(products));