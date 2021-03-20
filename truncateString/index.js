// Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

// Examples
// ('codewars', 9)  ==>  'codewars'
// ('codewars', 7)  ==>  'code...'
// ('codewars', 2)  ==>  'co...'

const truncateString = (text, maxLength) => {
  if (text.length < maxLength) {
    return text;
  }
  const limit = maxLength <= 3 ? maxLength : maxLength - 3;
  return text.substring(0, limit) + "...";
};

console.log("'codewars', 9 ==>  'codewars' = ", truncateString("codewars", 9));
console.log("'codewars', 7 ==>  'code...' = ", truncateString("codewars", 7));
console.log("'codewars', 2 ==>  'co...' = ", truncateString("codewars", 2));
