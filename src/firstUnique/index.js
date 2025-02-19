// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let frequencies = {};
  let uniqueLetters = {};
  for (let index = 0; index < s.length; index++) {
    const currentValue = s[index];
    if (!frequencies[currentValue]) {
      frequencies[currentValue] = 1;
      uniqueLetters[currentValue] = index;
    } else {
      frequencies[currentValue]++;
      delete uniqueLetters[currentValue];
    }
  }
  const listOfIndex = Object.values(uniqueLetters);
  if (listOfIndex.length === 0) {
    return -1;
  }
  return Math.min(...listOfIndex);
};

console.log("leetcode", firstUniqChar("leetcode"));
console.log("loveleetcode", firstUniqChar("loveleetcode"));
