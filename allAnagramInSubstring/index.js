// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s. Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output: [0, 6]
// Explanation:

// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output: [0, 1, 2]

const anagramGenerator = (word) => {
  const anagrams = {};

  const anagramGenerator = (currentText, possibleCombinations) => {
    if (currentText.length === word.length) {
      anagrams[currentText] = true;
    }
    for (let index = 0; index < possibleCombinations.length; index++) {
      const currentLetter = possibleCombinations[index];
      const allOtherCombinations =
        possibleCombinations.slice(0, index) +
        possibleCombinations.slice(index + 1);
      anagramGenerator(currentText + currentLetter, allOtherCombinations);
    }
  };
  anagramGenerator("", word);

  return anagrams;
};

const getAllAnagramsInSubstring = (word, substring) => {
  const anagrams = anagramGenerator(substring);
  const anagramIndex = [];
  for (let index = 0; index < word.length; index++) {
    const sequenceToMatch = word.slice(index, index + substring.length);
    if (anagrams[sequenceToMatch]) {
      anagramIndex.push(index);
    }
  }
  return anagramIndex;
};

console.log(`s: "abab" p: "ab"`, getAllAnagramsInSubstring("abab", "ab"));
console.log(
  `s: "cbaebabacd" p: "abc"`,
  getAllAnagramsInSubstring("cbaebabacd", "abc")
);
