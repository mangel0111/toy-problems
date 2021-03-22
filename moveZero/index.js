// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let limit = nums.length;
  for (let index = 0; index < limit; index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
      index--;
      limit--;
    }
  }
  return nums;
};

console.log("[0,1,0,3,12]", moveZeroes([0, 1, 0, 3, 12]));
console.log("[0]", moveZeroes([0]));
