// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }
  const previousChar = countAndSay(n - 1);
  let count = 1;
  let result = "";
  for (let index = 0; index < previousChar.length; index++) {
    const currentChar = previousChar[index];
    const nextChar = previousChar[index + 1];
    if (index !== previousChar.length - 1 && currentChar == nextChar) {
      count++;
    } else {
      result += `${count}${currentChar}`;
      count = 1;
    }
  }
  return result;
};

console.log("1", countAndSay(1));
console.log("2", countAndSay(2));
console.log("3", countAndSay(3));
console.log("4", countAndSay(4));
