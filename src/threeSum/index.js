/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

/**
 * This solution works, but it's 0(n^3) time complexity,
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = new Set();
  const n = nums.length;

  // Loop through all possible combinations of 3 numbers since the beginning to the before the last element
  for (let i = 0; i < n - 2; i++) {
    // Loop through all possible combinations of 3 numbers since the next element to the last element
    for (let j = i + 1; j < n - 1; j++) {
      // Loop through all possible combinations of 3 numbers since the next element to the last element
      for (let k = j + 1; k < n; k++) {
        // If sum of the 3 numbers is 0
        if (nums[i] + nums[j] + nums[k] === 0) {
          // Sort the triplet to avoid duplicates
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.add(triplet.join(',')); // Store as a string to avoid duplicates
        }
      }
    }
  }

  return Array.from(result).map((t) => t.split(',').map(Number));
};

/**
 * This solution have a 0(n^2) time complexity,
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumImproved = function (nums) {
  const results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    /**
     * Compare the current number with the previous one, if they are the same,
     * skip the current number. Skip for the first number, because there is no previous number.
     */
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    /**
     * Define the left and right pointers
     *
     * [x,left,x,x,x,x,right]
     */
    let left = i + 1;
    let right = nums.length - 1;

    // Loop through the array, before the pointers overlap.
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // If the sum is 0, add the triplet to the results
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate values for the second element
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate values for the third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers after finding a valid triplet
        left++;
        right--;
      }
      // if the sum is less than 0, move the left pointer to the right, because of the value is sorted it will increase the sum
      else if (sum < 0) {
        left++; // Increase sum by moving left pointer
      }
      // if the sum is lower than zero, move the right pointer to the left, because of the value is sorted it will decrease the sum
      else {
        right--; // Decrease sum by moving right pointer
      }
    }
  }

  return results;
};

// Example usage:
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4]))); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(JSON.stringify(threeSum([0, 1, 1]))); // Output: []
console.log(JSON.stringify(threeSum([0, 0, 0, 0]))); // Output: [[0, 0, 0]]

console.log(JSON.stringify(threeSumImproved([-1, 0, 1, 2, -1, -4]))); // Output: [[-1, -1, 2], [-1, 0, 1]]
