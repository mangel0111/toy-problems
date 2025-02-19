// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const singleMapKey = {};
  const mapKey = {};
  for (let index = 0; index < nums.length; index++) {
    const currentValue = nums[index];
    if (mapKey[currentValue]) {
      mapKey[currentValue]++;
      delete singleMapKey[currentValue];
    } else {
      mapKey[currentValue] = 1;
      singleMapKey[currentValue] = 1;
    }
  }
  return Object.keys(singleMapKey)[0];
};

console.log([2, 2, 1], singleNumber([2, 2, 1]));
console.log([4, 1, 2, 1, 2], singleNumber([4, 1, 2, 1, 2]));
console.log([1], singleNumber([1]));
