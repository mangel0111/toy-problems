// Count the number of prime numbers less than a non-negative number, n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = [];
  for (let index = 2; index < n; index++) {
    isPrime[index] = true;
  }

  for (let index = 2; index * index < n; index++) {
    if (!isPrime[index]) {
      continue;
    }
    for (let subIndex = index * index; subIndex < n; subIndex += index) {
      isPrime[subIndex] = false;
    }
  }
  let count = 0;
  for (let index = 2; index < n; index++) {
    if (isPrime[index]) {
      count++;
    }
  }
  return count;
};

console.log(10, countPrimes(10));
