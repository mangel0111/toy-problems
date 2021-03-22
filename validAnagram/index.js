// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
const generateAnagrams = (word) => {
  let anagrams = {};
  const generator = (text, options) => {
    if (text.length === word.length && !anagrams[text]) {
      anagrams[text] = true;
    }
    for (let index = 0; index < options.length; index++) {
      const currentValue = options[index];
      generator(
        `${text}${currentValue}`,
        [].concat(options.slice(0, index), options.slice(index + 1))
      );
    }
  };
  generator("", word.split(""));
  return Object.keys(anagrams);
};

const limit = 5 * Math.pow(10, 4);
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramWithoutRecursion = function (s, t) {
  if (s.length > limit || t.length > limit) {
    return false;
  }
  if (s === t) {
    return true;
  }
  if (s.length !== t.length) {
    return false;
  }

  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");

  return sSorted === tSorted;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length > limit || t.length > limit) {
    return false;
  }
  if (s === t) {
    return true;
  }
  if (s.length !== t.length) {
    return false;
  }

  const anagrams = generateAnagrams(s);
  return anagrams.includes(t);
};

// console.log('s = "anagram", t = "nagaram"', isAnagram("anagram", "nagaram"));
// console.log('"rat", t = "car"', isAnagram("rat", "car"));
console.log(
  '"dgqztusjuu", "dqugjzutsu"',
  isAnagram("dgqztusjuu", "dqugjzutsu")
);
