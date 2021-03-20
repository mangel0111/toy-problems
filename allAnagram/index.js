/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
//create a function called all anagrams
const anagramGenerator = (word) => {
  const anagrams = {};

  const anagramGeneratorBuilder = (currentText, possibleCombinations) => {
    if (currentText.length === word.length) {
      anagrams[currentText] = true;
    }
    for (let index = 0; index < possibleCombinations.length; index++) {
      const currentLetter = possibleCombinations[index];
      const allOtherCombinations =
        possibleCombinations.slice(0, index) +
        possibleCombinations.slice(index + 1);
      anagramGeneratorBuilder(
        currentText + currentLetter,
        allOtherCombinations
      );
    }
  };
  anagramGeneratorBuilder("", word);

  return Object.keys(anagrams);
};

console.log("abc", anagramGenerator("abc"));
