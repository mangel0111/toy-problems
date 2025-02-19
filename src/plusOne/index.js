// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOneAlt = function (digits) {
  const arrayToInsert = [];
  const lastDigitToInsert = digits[digits.length - 1] + 1;
  if (lastDigitToInsert > 9) {
    arrayToInsert.push(1);
    arrayToInsert.push(0);
  } else {
    arrayToInsert.push(lastDigitToInsert);
  }

  digits.splice(digits.length - 1, 1, ...arrayToInsert);
  return digits;
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let index = digits.length - 1;
  for (index; index >= 0; index--) {
    if (digits[index] === 9) {
      digits[index] = 0;
    } else {
      carry += digits[index];
      digits[index] = carry;
      break;
    }
  }
  if (index < 0) {
    digits = [1, ...digits];
  }

  return digits;
};

console.log("[4,3,2,1]", plusOne([4, 3, 2, 1]));
console.log("[9]", plusOne([9]));
console.log("[1,9,9]", plusOne([1, 9, 9]));
console.log("[9,9,9]", plusOne([9, 9, 9]));
