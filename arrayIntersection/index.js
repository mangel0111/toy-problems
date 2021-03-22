// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const getIntersection = (list, currentValue, previousIntersection = 0) => {
  for (
    let subIndex = previousIntersection;
    subIndex < list.length;
    subIndex++
  ) {
    const currentSubValue = list[subIndex];
    if (currentValue === currentSubValue) {
      return (subIndex += 1);
    }
  }
  return null;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let intersections = [];
  let mapOfLastIntersection = {};
  for (let index = 0; index < nums1.length; index++) {
    const currentValue = nums1[index];
    const previousIntersection = mapOfLastIntersection[currentValue] || 0;
    const intersection =
      previousIntersection >= nums2.length
        ? 0
        : getIntersection(nums2, currentValue, previousIntersection);
    if (intersection) {
      mapOfLastIntersection[currentValue] = intersection;
      intersections.push(currentValue);
    }
  }
  return intersections;
};

console.log("[1, 2, 2, 1],[2, 2])", intersect([1, 2, 2, 1], [2, 2]));
console.log("[1, 2, 2, 1],[2])", intersect([1, 2, 2, 1], [2]));
