// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let offSet = 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[m + n - offSet] = nums1[index1--];
    } else {
      nums1[m + n - offSet] = nums2[index2--];
    }
    offSet++;
  }
  while (index2 >= 0) {
    nums1[m + n - offSet] = nums2[index2--];
    offSet++;
  }
};

console.log(
  "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
console.log("nums1 = [1], m = 1, nums2 = [], n = 0", merge([1], 1, [], 0));
console.log("[0] 0 [1] 1", merge([0], 0, [1], 1));
console.log("[2,0] 1 [1] 1", merge([2, 0], 1, [1], 1));

console.log(
  "[-1,0,0,3,3,3,0,0,0] 6 [1,2,2] 3",
  merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
);

console.log(
  "[-1,-1,0,0,0,0] 4 [-1,0] 2",
  merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2)
);
