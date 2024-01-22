/***1. Reverse a String**
Write a function to reverse a given string without using the 
built-in `reverse()` method.   */

function reverseString(string) {
  const rev = new Array();

  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(string[i]);
  }

  return rev.join("");
}

const originalString = "Lokesh";
const reversedString = reverseString(originalString);
console.log(reversedString);
