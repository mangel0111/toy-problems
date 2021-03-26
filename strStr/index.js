// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const isNeedleEmpty = needle.length === 0;
  const isTheSameLength = haystack.length === needle.length;
  const isTheSameValueAndLength = isTheSameLength && haystack === needle;
  const haystackIsBigger = haystack.length < needle.length;

  if (isNeedleEmpty || isTheSameValue) {
    return 0;
  }
  if ((isTheSameValueAndLength && haystack !== needle) || haystackIsBigger) {
    return -1;
  }

  for (let index = 0; index < haystack.length; index++) {
    const currentHayStack = haystack.substring(index, index + needle.length);
    if (currentHayStack === needle) {
      return index;
    }
  }
  return -1;
};

console.log('"hello", needle = "ll"', strStr("hello", "ll"));
console.log('haystack = "aaaaa", needle = "bba"', strStr("aaaaa", "bba"));
console.log('"", needle = ""', strStr("", ""));
console.log('"", needle = "a"', strStr("", "a"));
