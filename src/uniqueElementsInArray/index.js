// Write a JavaScript function to find the unique elements from two arrays

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

const flatterArray = (list) => {
  return list.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatterArray(toFlatten) : toFlatten
    );
  }, []);
};

const getUniqueFromTwoArrays = (firstList, secondList) => {
  return Array.from(
    new Set([...flatterArray(firstList), ...flatterArray(secondList)])
  ).sort(function (a, b) {
    return a - b;
  });
};

console.log(
  "[1, 2, 3], [100, 2, 1, 10]",
  getUniqueFromTwoArrays([1, 2, 3], [100, 2, 1, 10])
);
console.log(
  "[1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]",
  getUniqueFromTwoArrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])
);
