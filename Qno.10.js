const anagramChecker = (word1, word2) => {
  let arr1 = word1.split("");
  let arr2 = word2.split("");

  arr1 = arr1.sort();
  arr2 = arr2.sort();

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return "They are anagrams";
      }
    }
  } else {
    return "They not an anagram";
  }
};

console.log(anagramChecker("Lokesh", "hsekoL"));
