/*  **3. Palindrome Checker**
Create a function that checks if a given string is a palindrome (reads the same backward as forward).
*/
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const String = "MAAM";
const Result = isPalindrome(String);

if (Result) {
  console.log(`${String} is a palindrome.`);
} else {
  console.log(`${String} is not a palindrome.`);
}
