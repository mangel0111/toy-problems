/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

const characterFrequency = (word) => {
  const frequencies = {};
  const response = [];
  for (let index = 0; index < word.length; index++) {
    const currentLetter = word[index];
    if (frequencies[currentLetter]) {
      frequencies[currentLetter]++;
    } else {
      frequencies[currentLetter] = 1;
    }
  }
  Object.keys(frequencies).forEach((frequencyKey) => {
    const frequencyList = [frequencyKey, frequencies[frequencyKey]];
    response.push(frequencyList);
  });
  return response.sort((previous, current) => {
    const previousFrequency = previous[1];
    const currentFrequency = current[1];
    if (previousFrequency > currentFrequency) {
      return -1;
    } else if (previousFrequency < currentFrequency) {
      return 1;
    }
    const previousLetter = previous[0];
    const currentLetter = current[0];
    if (previousLetter > currentLetter) {
      return 1;
    } else if (previousLetter < currentLetter) {
      return -1;
    }
    return 0;
  });
};
console.log("mississippi", characterFrequency("mississippi"));
console.log("mmmaaaiiibbb", characterFrequency("mmmaaaiiibbb"));
console.log("miaaiaaippi", characterFrequency("miaaiaaippi"));
