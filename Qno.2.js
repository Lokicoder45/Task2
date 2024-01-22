/***2. Factorial Calculation**
Write a function to calculate the factorial of a given positive integer.
 */

function Factorial(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

const number = 5;
const result = Factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
