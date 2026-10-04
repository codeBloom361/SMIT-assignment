// Product Price Organizer
const prices = [1200, 450, 3000, 750, 1500, 250];

const lowestToHighest = prices.sort((a, b) => a - b);
console.log("Prices (Lowest to Highest):", lowestToHighest);

const highestToLowest = prices.sort((a, b) => b - a);
console.log("Prices (Highest to Lowest):", highestToLowest);

const reversedPrices = prices.slice().reverse();
console.log("Original Prices:", prices);
console.log("Reversed Prices:", reversedPrices);

const randomOrder = prices.slice().sort(() => Math.random() - 0.5);
console.log("Randomly Ordered Prices:", randomOrder);