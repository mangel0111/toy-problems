// A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward.
// For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read
// the same from left to right and from right to left.

const isPalindrome = (word) => {
  const lowerCaseWord = word.toLowerCase();
  const reverseWord = lowerCaseWord.split("").reverse().join("");
  return reverseWord === lowerCaseWord;
};

console.log("racecar", isPalindrome("racecar"));
console.log("anna", isPalindrome("anna"));
console.log("aNna", isPalindrome("aNna"));
console.log("table", isPalindrome("table"));
