// Class Results Analysis
const analyzeMarks = (initialMarks) => {
  const secondMarks = [81, 60, 95];
  const combinedMarks = initialMarks.concat(secondMarks);
  console.log("Combined Marks:", combinedMarks);

  const selectedMarks = combinedMarks.slice(2, 6);
  console.log("Selected Marks Portion:", selectedMarks);

  const modifiedMarks = [...combinedMarks];
  modifiedMarks.splice(5, 1, 99); 
  console.log("Marks after modifying the middle element:", modifiedMarks);

  console.log("Total number of marks:", modifiedMarks.length);

  const sortedMarks = [...modifiedMarks].sort((a, b) => a - b);
  console.log("Sorted Marks (Ascending):", sortedMarks);

  const reversedSortedMarks = [...sortedMarks].reverse();
  console.log("Reversed Sorted Marks (Descending):", reversedSortedMarks);
};

const marks = [78, 45, 92, 66, 88, 54, 91, 73];
analyzeMarks(marks);