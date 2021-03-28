// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

/**
 * O(n*n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  if (nums.length === 1) {
    return nums[0];
  }
  for (let index = 0; index < nums.length; index++) {
    let currentSubArray = 0;
    for (let subIndex = index; subIndex < nums.length; subIndex++) {
      currentSubArray += nums[subIndex];
      maxSum = Math.max(maxSum, currentSubArray);
    }
  }
  return maxSum;
};

/**
 * O(n*n)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayDP = function (nums) {
  let currentSubArray = nums[0];
  let maxSubArray = nums[0];

  for (let index = 1; index < nums.length; index++) {
    let currentNumber = nums[index];
    currentSubArray = Math.max(currentNumber, currentSubArray + currentNumber);
    maxSubArray = Math.max(currentSubArray, maxSubArray);
  }

  return maxSubArray;
};

console.log(
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);

console.log(
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  maxSubArrayDP([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
