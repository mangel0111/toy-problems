/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 *
 */

function comparator(a, b) {
  return a - b;
}

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
 */
const bubbleSort = (numbers) => {
  const length = numbers.length;
  let temporary;
  for (let loop = 0; loop < length; loop++) {
    console.log("loop", loop);
    for (var position = 0; position < length; position++) {
      console.log("inner loop", position);

      const currentValue = numbers[position];
      e;
      const previous = numbers[position + 1];

      console.log("Current", currentValue);
      console.log("PreviousNumber", previous);
      if (currentValue > previous) {
        temporary = numbers[position];
        numbers[position] = numbers[position + 1];
        numbers[position + 1] = temporary;
      }
    }
  }
  return numbers;
};

const bubbleSortImproved = (numbers) => {
  const length = numbers.length;
  let temporary;
  for (let loop = 0; loop < length; loop++) {
    console.log("loop", loop);
    for (var innerLoop = loop; innerLoop > 0; innerLoop--) {
      console.log("inner loop", innerLoop);

      const currentValue = numbers[innerLoop];
      const previous = numbers[innerLoop - 1];

      console.log("Current", currentValue);
      console.log("PreviousNumber", previous);
      if (comparator(currentValue, previous) < 0) {
        temporary = numbers[innerLoop];
        numbers[innerLoop] = numbers[innerLoop - 1];
        numbers[innerLoop - 1] = temporary;
      }
    }
  }
  return numbers;
};

console.log([5, 7, 6, 3, 2, 1], bubbleSortImproved([5, 6, 7, 3, 2, 1])); // returns [1, 2, 3,]
