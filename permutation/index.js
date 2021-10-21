// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:
// Input: n = 3, k = 3
// Output: "213"

// Example 2:
// Input: n = 4, k = 9
// Output: "2314"

// Example 3:
// Input: n = 3, k = 1
// Output: "123"
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    // factorial[i] is i!
    let factorial = new Array(n);
    // nums[i] is i+1
    let nums = new Array(n);
    factorial[0] = 1;
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
        nums[i - 1] = i;
    }
    nums[nums.length - 1] = n;
    let res = [];
    // i = the number of digits remaining to be figured out
    for (let i = n; i > 0; i--) {
        let idx = Math.ceil(k / factorial[i - 1]) - 1;
        // factorial[i-1] is the number of permutations per block
        // idx is the number of blocks before k-th permutation
        // hence idx * factorial[i-1] is the number of elements we jump over
        k -= idx * factorial[i - 1];
        res.push(nums[idx]);
        // we remove a found digit from array so that a digit doesn't repeat
        nums.splice(idx, 1);
    }
    return res.join("");
};

console.log(getPermutation(n = 3, k = 3))