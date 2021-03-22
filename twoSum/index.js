// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    for (let subIndex = 0; subIndex < nums.length; subIndex++) {
      if (subIndex !== index) {
        const currentSubIndexValue = nums[subIndex];
        if (currentValue + currentSubIndexValue === target) {
          return [index, subIndex];
        }
      }
    }
  }
};

console.log("nums = [2,7,11,15], target = 9", twoSum([2, 7, 11, 15], 9));
console.log("nums = [3,2,4], target = 6", twoSum([3, 2, 4], 6));
