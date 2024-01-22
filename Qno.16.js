// **16. Reverse Words in a String**
// Write a function that reverses the order of words in a sentence.

const revWords = (sentence) => {
  const arr = sentence.split(" ");
  let newSentence = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newSentence += arr[i] + " ";
  }
  return newSentence;
};

console.log(
  revWords("function that reverses the order of words in a sentence")
);
