// **4. Find the Longest Word**
// Write a function that finds and returns the longest word in a sentence.

function findLongestWord(sentence) {
  const words = sentence.split("");

  let longestWord = words[0].length;
  let pos = 0;

  for (let i = 1; i < words.length; i++) {
    if (longest < words[i].length) {
      longest = words[i].length;
      pos = i;
    }
  }

  return words;
}

const sentence = "This is the example of the longest word for the task.";
const Result = findLongestWord(sentence);
console.log(`The longest word in the sentence is: ${Result}`);
