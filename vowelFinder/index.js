// You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.

// The vowels are “a”, “e”, “i”, “o”, “u”.

// Examples:

// findVowels('hello') // --> 2
// findVowels('why') // --> 0

const findVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let index = 0; index < word.length; index++) {
    if (vowels.includes(word[index])) {
      count++;
    }
  }
  return count;
};

const findVowelsWithRegex = (word) => {
  const matched = word.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
};

console.log("hello", findVowels("hello"));
console.log("why", findVowels("why"));
console.log("aaa", findVowels("aaa"));
console.log("murcielago", findVowels("murcielago"));
console.log("murcielago", findVowelsWithRegex("murcielago"));
