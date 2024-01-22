// **15. Find the Second Largest Number**
// Create a function that finds and returns the second-largest number in an array of numbers.

const array = [11, 4, 5, 13, 2, 16, 4];

function SecondLargest(array) {
  const sorted = array.sort((a, b) => {
    return a - b;
  });
  return sorted[array.length - 2];
}

console.log(SecondLargest(array));
