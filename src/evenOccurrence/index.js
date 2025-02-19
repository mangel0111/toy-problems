/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

const evenOccurrence = (list) => {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  }
  let frequency = {};
  for (let index = 0; index < list.length; index++) {
    const currentNumber = list[index];
    if (frequency[currentNumber]) {
      frequency[currentNumber]++;
    } else {
      frequency[currentNumber] = 1;
    }
  }
  console.log(frequency);
  const frequencyKeys = Object.keys(frequency);

  for (let index = 0; index < frequencyKeys.length; index++) {
    const frequencyKey = frequencyKeys[index];
    if (frequency[frequencyKey] % 2 === 0) {
      return frequencyKey;
    }
  }
  return null;
};

console.log(
  [1, 7, 2, 4, 5, 6, 8, 9, 6, 4],
  evenOccurrence([1, 7, 7, 2, 4, 5, 6, 8, 9, 6, 4])
);
