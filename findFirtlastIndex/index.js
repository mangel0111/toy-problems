// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let lowIndex = -1;
    let highIndex = -1;

    lowIndex = nums.indexOf(target);
    if (lowIndex >= 0) {
        highIndex = lowIndex;
        for (let index = lowIndex; index < nums.length; index++) {
            const currentIndex = nums[index];
            if (currentIndex === target) {
                highIndex = index;
            }
        }
    }

    return [lowIndex, highIndex];
};

console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 8));
console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 6));
console.log(searchRange(nums = [], target = 0));
console.log(searchRange(nums = [1], target = 1));
console.log(searchRange(nums = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6], target = 6));