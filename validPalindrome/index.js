// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const wordWithoutSpaces = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const reversedWord = wordWithoutSpaces.split("").reverse().join("");
  return reversedWord === wordWithoutSpaces;
};

console.log(
  "A man, a plan, a canal: Panama",
  isPalindrome("A man, a plan, a canal: Panama")
);
