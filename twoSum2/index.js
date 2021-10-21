// Given an array of integers and a value, determine if there are any two integers in the array 
// whose sum is equal to the given value.Return true if the sum exists and return false if it does not.Consider 
// this array and the target sums:
// Example 1:

// Input: nums = [5,7,1,2,8,43], target = 10
// Output: true
// Output: Because 7+3=10, 2+8=10.

// Example 2:

// Input: nums = [5,7,1,2,8,43], target = 19
// Output: false


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const foundNumbers = new Set();
    for (let index = 0; index < nums.length; index++) {
        let currentNumber = nums[index];
        let difference = target - currentNumber;
        if (foundNumbers.has(difference)) {
            return true;
        }
        foundNumbers.add(currentNumber);
    }
    return false;
};

console.log(twoSum([5, 7, 1, 2, 8, 43], 10))
console.log(twoSum([5, 7, 1, 2, 8, 43], 19))