// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

const generateInteger = (x) => {
  let isNegative = x < 0;
  const reversedInteger = `${x}`.split("").reverse().join("");
  if (isNegative) {
    return parseInt(
      `-${reversedInteger.substring(0, reversedInteger.length - 1)}`
    );
  }
  return parseInt(reversedInteger);
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversedInteger = generateInteger(x);
  if (
    reversedInteger < Math.pow(-2, 31) ||
    reversedInteger > Math.pow(2, 31) - 1
  ) {
    return 0;
  }
  return reversedInteger;
};

console.log("123", reverse(123));
console.log("-123", reverse(-123));
console.log("120", reverse(120));
console.log("-1463847412", reverse(-1463847412));
console.log("1534236469", reverse(1534236469));
