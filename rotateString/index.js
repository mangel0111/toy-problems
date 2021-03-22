// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const limit = s.length / 2;
  for (let index = 0; index < limit; index++) {
    var temp = s[index];
    s[index] = s[s.length - 1 - index];
    s[s.length - 1 - index] = temp;
  }
  return s;
};

console.log(`["h","e","l","l","o"]`, reverseString(["h", "e", "l", "l", "o"]));
console.log(
  `["H","a","n","n","a","h"]`,
  reverseString(["H", "a", "n", "n", "a", "h"])
);
