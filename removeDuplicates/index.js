// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Internally you can think of this:

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    let currentValue = nums[index];
    let nextValue = nums[index + 1];
    if (currentValue === nextValue) {
      nums.splice(index, 1);
      index--;
    }
  }
  return nums.length;
};

console.log("[1,1,2]", removeDuplicates([1, 1, 2]));
console.log(
  "[0,0,1,1,1,2,2,3,3,4]",
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
);
