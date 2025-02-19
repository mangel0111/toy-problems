// Given an integer array nums of unique elements, return all possible subsets(the power set).

// The solution set must not contain duplicate subsets.Return the solution in any order.

// Example 1:
// Input: nums = [1, 2, 3]
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// Example 2:
// Input: nums = [0]
// Output: [[], [0]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let results = [];
    const subsetCount = Math.pow(2, nums.length);
    for (let index = 0; index < subsetCount; index++) {
        let set = [];
        for (let j = 0; j < nums.length; j++) {
            if ((index & (1 << j)) > 0) {
                set.push(nums[j])
            }
        }
        results.push(set)
    }
    return results;
};

console.log(subsets([1, 2, 3]))