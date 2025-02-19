// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Example 1:
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.originalList = [].concat(nums);
  this.list = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.list = [].concat(this.originalList);
  return this.originalList;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let temporary;
  for (let index = this.list.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    temporary = this.list[index];
    this.list[index] = this.list[randomIndex];
    this.list[randomIndex] = temporary;
  }
  return this.list;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffleSortingRandom = function () {
  return this.list.sort(() => Math.random() - 0.5);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const shuffler = new Solution([1, 2, 3]);
console.log(shuffler.shuffle());
console.log(shuffler.reset());
console.log(shuffler.shuffle());
console.log(shuffler.shuffle());
